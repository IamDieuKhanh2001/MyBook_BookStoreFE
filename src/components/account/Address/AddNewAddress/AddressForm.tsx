"use client"
import useAPIAddress from '@/lib/hooks/api/useAPIAddress'
import React, { useEffect, useState, useCallback } from 'react'
import { toast } from 'react-toastify'
import { Formik, Form, Field, ErrorMessage, } from 'formik';
import * as Yup from 'yup';

interface FormValues {
    recipientName: string;
    recipientPhone: string;
    street: string;
    provinceId: number,
    districtId: number;
    wardId: number;
    addressDefault: boolean;
}
interface IAddressFormProps {
    handleHideModal: () => void;
}
const AddressForm = (props: IAddressFormProps) => {
    const { handleHideModal } = props
    const [selectedProvinceId, setSelectedProvinceId] = useState(0);
    const [selectedDistricId, setSelectedDistricId] = useState(0);
    const { getProvinceList, getDistrictList, getWardList } = useAPIAddress()
    const { data: provinceList, isLoading: isLoadingProvince } = getProvinceList()
    const { data: districtList, isLoading: isLoadingDistrict } = getDistrictList(selectedProvinceId)
    const { data: wardList, isLoading: isLoadingWard } = getWardList(selectedDistricId)

    const initialValues: FormValues = {
        recipientName: '',
        recipientPhone: '',
        street: '',
        provinceId: 0,
        districtId: 0,
        wardId: 0,
        addressDefault: false,
    };

    const validationSchema = Yup.object().shape({
        recipientName: Yup.string()
            .max(50, "*tên không quá 50 ký tự")
            .required("*Tên không được để trống"),
        recipientPhone: Yup.string()
            .max(11, "*số điện thoại không quá 11 số")
            .matches(/^[0-9]+$/, '*Số điện thoại chỉ được chứa các số')
            .required("Số điện thoại không được để trống"),
        street: Yup.string()
            .max(50, "*Số nhà & tên đường không quá 50 số")
            .required("*Số nhà & tên đường không được để trống"),
        provinceId: Yup.number()
            .notOneOf([0], '*Vui lòng chọn thành phố/Tỉnh') // Không cho phép giá trị bằng 0
            .required('*Vui lòng chọn thành phố/Tỉnh'),
        districtId: Yup.number()
            .notOneOf([0], '*Vui lòng chọn quận/huyện') // Không cho phép giá trị bằng 0
            .required('*Vui lòng chọn quận/huyện'),
        wardId: Yup.number()
            .notOneOf([0], '*Vui lòng chọn phường/xã') // Không cho phép giá trị bằng 0
            .required('*Vui lòng chọn phường/xã'),
    });

    const handleSubmit = async (values: FormValues) => {
        toast.success("Đã thêm thành công địa chỉ mới!")
        console.log(values)
        handleHideModal()
    }

    const handleChangeProvince = (e: any, setFieldValue: any) => {
        const selectedValue = e.target.value;
        setFieldValue('provinceId', selectedValue);
        setFieldValue('districtId', 0) //Reset
        setFieldValue('wardId', 0)
        setSelectedProvinceId(selectedValue); //Reset
        setSelectedDistricId(0); //Reset
    }

    const handleChangeDistrict = (e: any, setFieldValue: any) => {
        const selectedValue = e.target.value;
        setFieldValue('districtId', selectedValue);
        setFieldValue('wardId', 0)
        setSelectedDistricId(selectedValue);
    }

    useEffect(() => {
        console.log('Giá trị province đã chọn:', selectedProvinceId);
        console.log('Giá trị district đã chọn:', selectedDistricId);
        // Tại đây, bạn có thể làm bất kỳ điều gì với giá trị đã chọn
    }, [selectedProvinceId, selectedDistricId]);

    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ values, setFieldValue, isValid, handleChange, errors, touched, isSubmitting }) => (
                    <Form>
                        <div className="input-group">
                            <span className="input-group-text">Họ & tên</span>
                            <Field
                                id='recipientName'
                                name="recipientName"
                                type='text'
                                value={values.recipientName}
                                className="form-control"
                            />
                        </div>
                        <ErrorMessage name="recipientName" component="p" className="text-danger" />
                        <div className="input-group mt-3">
                            <span className="input-group-text">Số điện thọai</span>
                            <Field
                                id='recipientPhone'
                                name="recipientPhone"
                                type='text'
                                value={values.recipientPhone}
                                className="form-control"
                            />
                        </div>
                        <ErrorMessage name="recipientPhone" component="p" className="text-danger" />
                        <div className="input-group mt-3">
                            <span className="input-group-text">Số nhà & đường</span>
                            <Field
                                id='street'
                                name="street"
                                value={values.street}
                                type='text'
                                className="form-control"
                            />
                        </div>
                        <ErrorMessage name="street" component="p" className="text-danger" />
                        <div className="input-group mt-3">
                            <Field
                                disabled={isLoadingProvince}
                                name="provinceId"
                                id="provinceId"
                                as='select'
                                value={values.provinceId}
                                className="form-select"
                                onChange={(e: any) => handleChangeProvince(e, setFieldValue)}
                            >
                                <option disabled={true} value={0}>
                                    Thành phố/Tỉnh {isLoadingProvince && '(Đang tải ...)'}
                                </option>
                                {provinceList.map((province: IProvince) => (
                                    <option
                                        key={province.province_id}
                                        value={province.province_id}
                                    >
                                        {province.name}
                                    </option>
                                ))}
                            </Field>
                        </div>
                        <ErrorMessage name="provinceId" component="p" className="text-danger" />
                        <div className="input-group mt-3">
                            <Field
                                disabled={isLoadingDistrict}
                                name="districtId"
                                id="districtId"
                                as='select'
                                value={values.districtId}
                                className="form-select"
                                onChange={(e: any) => handleChangeDistrict(e, setFieldValue)}
                            >
                                <option disabled={true} value={0}>
                                    Quận/huyện
                                </option>
                                {districtList?.map((district: IDistrict) => (
                                    <option
                                        key={district.district_id}
                                        value={district.district_id}
                                    >
                                        {district.name}
                                    </option>
                                ))}
                            </Field>
                        </div>
                        <ErrorMessage name="districtId" component="p" className="text-danger" />
                        <div className="input-group mt-3">
                            <Field
                                disabled={isLoadingWard}
                                name="wardId"
                                id="wardId"
                                as='select'
                                value={values.wardId}
                                className="form-select"
                                onChange={handleChange}
                            >
                                <option disabled={true} value={0}>Phường/Xã</option>
                                {wardList?.map((ward: IWard) => (
                                    <option
                                        key={ward.wards_id}
                                        value={ward.wards_id}
                                    >
                                        {ward.name}
                                    </option>
                                ))}
                            </Field>
                        </div>
                        <ErrorMessage name="wardId" component="p" className="text-danger" />
                        <div className='mt-3'>
                            <div className="form-check">
                                <Field
                                    type="checkbox"
                                    id='addressDefault'
                                    name="addressDefault"
                                    className="form-check-input"
                                    checked={values.addressDefault}
                                    onChange={handleChange}
                                />
                                <label className="form-check-label" htmlFor="addressDefault">
                                    Sử dụng làm địa chỉ mặc định
                                </label>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={handleHideModal}>Đóng</button>
                            <button type="submit" className="btn btn-primary">Thêm địa chỉ</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default AddressForm
