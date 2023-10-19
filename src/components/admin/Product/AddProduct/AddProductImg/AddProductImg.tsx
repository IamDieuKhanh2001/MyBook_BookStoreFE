'use client'
import { Button, Grid, Stack } from '@mui/material'
import { IconTrash, IconUpload } from '@tabler/icons-react'
import { useConfirm } from 'material-ui-confirm'
import React, { useState, useEffect, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { toast } from 'react-toastify'
import styles from './AddProductImg.module.scss'

interface IAddProductImgProps {
  displayTab?: boolean
}
const AddProductImg = (props : IAddProductImgProps) => {
  const { displayTab = false } = props
  const [files, setFiles] = useState<any[]>([])
  const confirm = useConfirm();

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
      rejectedFiles.forEach((file: any) => {
        if (file instanceof File) {
          toast.error("Không thể tải lên File với tên: " + file.name);
        } else {
          toast.error("Không thể tải lên File với tên không xác định");
        }
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
      console.log('revoke file')
    }
  }, [])

  const removeFile = (index: number) => {
    if (index >= 0 && index < files.length) {
      setFiles(previousFiles => previousFiles.filter((_, i) => i !== index));
    }
  }

  const removeAll = () => {
    setFiles([])
  }

  const saveImgsUploaded = () => {
    confirm({
      title: `Lưu các ảnh cho sản phẩm ?`,
      description: 'Bạn có chắc chắn muốn thực hiện hành động này?',
  })
      .then(async () => {
          try {
            if (files.length === 0) {
              toast.error("Upload ảnh thất bại, chưa chọn file")
              return
            }
            files.map((file) => {
              console.log(file)
            })
            toast.success("Upload ảnh thành công")
          }
          catch (e) {
              toast.error("Something when wrong, please try again")
          }
      })
  }

  // useEffect(() => {
  //   console.log('Updated files:', files);
  // }, [files]);

  return (
    <div style={{ display: displayTab ? 'block' : 'none' }}>
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

      {/* Preview */}
      <Stack spacing={1} direction="row" justifyContent={'space-evenly'} alignItems="center">
        <Button
          color="secondary"
          onClick={removeAll}
          size='small' disableElevation variant="contained" href="">
          Loại bỏ tất cả ảnh
        </Button>
        <Button
          color="secondary"
          onClick={saveImgsUploaded}
          size='small' disableElevation variant="contained" href="">
          Lưu ảnh
        </Button>
      </Stack>
      <div className=''>
        <h2 className=''>Danh sách ảnh đã chọn</h2>
      </div>

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
                className=''
              />
              <button
                type='button'
                className={styles.deleteFile}
                onClick={() => removeFile(index)}
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
    </div>
  )
}

export default AddProductImg
