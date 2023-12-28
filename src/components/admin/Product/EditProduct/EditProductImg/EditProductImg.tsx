'use client'
import { Box, Button, CircularProgress, Grid, Stack, Typography } from '@mui/material'
import { IconTrash, IconUpload } from '@tabler/icons-react'
import { useConfirm } from 'material-ui-confirm'
import React, { useState, useEffect, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { toast } from 'react-toastify'
import styles from './EditProductImg.module.scss'
import CustomButton from '@/components/forms/theme-elements/CustomButton'
import { IBook } from '../../../../../../types/IBook'
import useAPIBook from '@/lib/hooks/api/useAPIBook'
import { errorHandler } from '@/lib/utils/ErrorHandler'
import { KeyedMutator } from 'swr'

interface IEditProductImgProps {
  displayTab?: boolean,
  setCurrentStepCompleted: () => void,
  stepCompleted?: boolean,
  productEdit: IBook,
  mutate: KeyedMutator<any>,
}
const EditProductImg = (props: IEditProductImgProps) => {
  const { displayTab = false, setCurrentStepCompleted, stepCompleted = false, productEdit, mutate } = props
  const [files, setFiles] = useState<any[]>([])
  const confirm = useConfirm();
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { addListImage, deleteImg } = useAPIBook()

  const onDrop = useCallback((acceptedFiles: any, rejectedFiles: any) => {
    if (acceptedFiles?.length) {
      setFiles(previousFiles => [
        // If allowing multiple files
        ...previousFiles,
        ...acceptedFiles.map((file: any) =>
          Object.assign(file, { preview: URL.createObjectURL(file) })
        )
      ])
    }

    if (rejectedFiles?.length) {
      rejectedFiles.forEach((file: File) => {
        toast.error("Không thể tải lên File với tên: " + file?.name);
      });
    }
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/*': []
    },
    maxSize: 1024 * 1000,
    maxFiles: 4,
    onDrop
  })

  useEffect(() => {
    // Revoke the data uris to avoid memory leaks
    return () => {
      files.forEach(file => URL.revokeObjectURL(file.preview))
    }
  }, [])

  const removeFileUploaded = (index: number) => {
    if (index >= 0 && index < files.length) {
      setFiles(previousFiles => previousFiles.filter((_, i) => i !== index));
    }
  }

  const handleRemoveImgById = (bookImageId: number) => {
    confirm({
      title: `Lưu các ảnh cho sản phẩm ?`,
      description: 'Bạn có chắc chắn muốn thực hiện hành động này?',
    })
      .then(async () => {
        try {
          await deleteImg(bookImageId)
          mutate()
          toast.success("Delete img complete")
        }
        catch (e) {
          errorHandler(e)
          toast.error("Có lỗi xảy ra khi xóa ảnh, vui lòng thử lại!")
        }
      })
  }

  const saveImgsUploaded = () => {
    confirm({
      title: `Lưu các ảnh cho sản phẩm ?`,
      description: 'Bạn có chắc chắn muốn thực hiện hành động này?',
    })
      .then(async () => {
        try {
          setIsLoading(true)
          let bodyFormData = new FormData();
          files.forEach((file, index) => {
            bodyFormData.append(`cover_image[${index}]`, file)
          })
          await addListImage(bodyFormData, productEdit?.isbn_code)
          toast.success("Upload ảnh thành công")
          setIsLoading(false)
          setCurrentStepCompleted()
        }
        catch (e) {
          errorHandler(e)
          toast.error("Có lỗi xảy ra khi upload ảnh, vui lòng thử lại!")
        }
      })
  }

  const handleSkip = () => {
    confirm({
      title: `Xoá ảnh ?`,
      description: 'Bạn có chắc chắn muốn thực hiện hành động này?',
    })
      .then(async () => {
        setCurrentStepCompleted()
      })
  }

  return (
    <>
      <div style={{ display: displayTab ? 'block' : 'none' }}>
        {!stepCompleted && (
          <div
            {...getRootProps({
              className: styles.uploadBox
            })}
          >
            <input {...getInputProps({ name: 'file' })} />
            <div className={styles.uploadBoxContent}>
              <IconUpload />
              {isDragActive ? (
                <p>Drop the files here ...</p>
              ) : (
                <p>Drag & drop files here, or click to select files</p>
              )}
            </div>
          </div>
        )}
        {/* Preview */}
        <h2 className=''>Danh sách ảnh đã tải lên</h2>
        {/* Accepted files */}
        <Grid container>
          {files.map((file, index) => (
            <Grid key={index} item xs={2} lg={2}>
              <div className={styles.previewFileItem}>
                <img
                  src={file?.preview}
                  alt={file.name}
                  width={100}
                  height={100}
                />
                <button
                  type='button'
                  className={styles.deleteFile}
                  onClick={() => removeFileUploaded(index)}
                  disabled={stepCompleted}
                >
                  <IconTrash size={'20px'} />
                </button>
                <p className={styles.fileOriginName}>
                  {file.name}
                </p>
              </div>
            </Grid>
          ))}
        </Grid>
        <h2 className=''>Danh sách ảnh hiện tại ({productEdit.images?.length} ảnh)</h2>
        <Grid container>
          {productEdit && productEdit.images?.map((item) => (
            <Grid key={item.id} item xs={2} lg={2}>
              <div className={styles.previewFileItem}>
                <img
                  src={item?.image_source || ''}
                  alt={`${item?.isbn_code}_${item?.id}`}
                  width={100}
                  height={100}
                />
                <button
                  type='button'
                  className={styles.deleteFile}
                  disabled={stepCompleted}
                  onClick={() => handleRemoveImgById(item.id)}
                >
                  <IconTrash size={'20px'} />
                </button>
                <p className={styles.fileOriginName}>
                  {`${item?.isbn_code}_${item?.id}`}
                </p>
              </div>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
          {!stepCompleted ? (
            files.length !== 0 ? (
              <CustomButton
                variant="contained"
                color="secondary"
                disabled={isLoading}
                onClick={saveImgsUploaded}
              >
                {
                  isLoading ?
                    (<CircularProgress color="inherit" size={25} />)
                    :
                    "Lưu các ảnh tải lên"
                }
              </CustomButton>
            ) : (
              <CustomButton
                variant="contained"
                color="secondary"
                onClick={handleSkip}
              >
                Bỏ qua bước này
              </CustomButton>
            )
          ) : (
            <Typography variant="caption" sx={{ display: 'inline-block' }}>
              Bước 2 đã hoàn thành
            </Typography>
          )}
        </Box>
      </div>
    </>
  )
}

export default EditProductImg
