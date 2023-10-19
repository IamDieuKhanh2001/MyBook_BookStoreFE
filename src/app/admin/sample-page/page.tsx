'use client'
import { useState, useEffect, useCallback, type ReactElement } from 'react';
import { Stack, Typography } from '@mui/material';
import PageContainer from '@/components/admin/container/PageContainer';
import DashboardCard from '@/components/shared/DashboardCard';
import { useConfirm } from 'material-ui-confirm';
import { toast } from 'react-toastify';
import { Alert, AlertTitle, Box, Button, Grid, } from '@mui/material'
import { IconPlus, IconUpload } from '@tabler/icons-react';
import { IconTrash } from '@tabler/icons-react';
import { useDropzone } from 'react-dropzone';
import styles from './page.module.scss'

const SamplePage = () => {
  const [files, setFiles] = useState<any[]>([])
  const [rejected, setRejected] = useState<any[]>([])

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
      toast.warning("Không thể upload, file không hợp lệ!")
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
    setRejected([])
  }

  const removeRejected = (name: String) => {
    setRejected(files => files.filter(({ file }) => file.name !== name))
  }

  const onSubmit = () => {
    if (files.length === 0) {
      toast.error("Upload ảnh thất bại, chưa chọn file")
      return
    }
    files.map((file) => {
      console.log(file)
    })
    toast.success("Upload ảnh thành công")
  }

  useEffect(() => {
    console.log('Updated files:', files);
  }, [files]);

  return (
    <PageContainer title='Author CRUD' description='CRUD Operation for author'>
      <Grid item xs={12} lg={8}>
        <DashboardCard
          title='Author List'
          subtitle='Manage author list'
        >
          <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' } }}>
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
            <section className=''>
              <Stack spacing={1} direction="row" justifyContent={'space-evenly'} alignItems="center">
                <Button
                  color="secondary"
                  onClick={removeAll}
                  size='small' disableElevation variant="contained" href="">
                  Loại bỏ tất cả ảnh
                </Button>
                <Button
                  color="secondary"
                  onClick={onSubmit}
                  size='small' disableElevation variant="contained" href="">
                  Lưu ảnh
                </Button>
              </Stack>
              <div className=''>
                <h2 className=''>Danh sách ảnh đã chọn</h2>
              </div>

              {/* Accepted files */}
              <h3 className=''>
                Các ảnh upload
              </h3>
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

              {/* Rejected Files */}
              <h3 className=''>
                Các file bị từ chối
              </h3>
              <ul className='mt-6 flex flex-col'>
                {rejected.map(({ file, errors }) => (
                  <li key={file.name} className=''>
                    <div>
                      <p className=''>
                        {file.name}
                      </p>
                      <ul className=''>
                        {errors.map((error: any) => (
                          <li key={error.code}>{error.message}</li>
                        ))}
                      </ul>
                    </div>
                    <button
                      type='button'
                      className=''
                      onClick={() => removeRejected(file.name)}
                    >
                      remove
                    </button>
                  </li>
                ))}
              </ul>
            </section>
          </Box>
        </DashboardCard>
      </Grid>

    </PageContainer>
  );
};

export default SamplePage;