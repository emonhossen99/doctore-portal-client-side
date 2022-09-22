import React from 'react';
import { useQuery } from 'react-query';
import { useForm } from 'react-hook-form';
import Loading from '../Shered/Loading/Loading'

const AddDoctor = () => {
    const {data : services,isLoading} = useQuery('services', () =>  fetch('http://localhost:5000/services').then(res => res.json()))
    const { register, formState: { errors }, handleSubmit,reset } = useForm();
    const image_api_key = 'ee286e325ef1400b956822df1b7fa365'
   /*
   * 3 ways to store images
   * 1 : Third path storage // Free open public storage for practice project
   * 2 : Your Own storage in your own server(file system)
   * 3 : database : mongodb
   *
   *YUP : to validate file : Search : Yup file validate for react hook form
   */

    const onSubmit = async data => {
       const image = data.Image[0];
       console.log(data)
       const formData = new FormData();
       formData.append('image', image);
       const url = `https://api.imgbb.com/1/upload?key=${image_api_key}`
       fetch(url,{
        method : 'POST',
        body : formData
       })
       .then(res => res.json())
       .then( result => {
        if(result.success){
            const img = result?.data?.url;
            const doctor = {
                 name : data.name,
                 email : data.email,
                 specialty : data.specialty,
                 img : img,
                
            }
        //request to database
        fetch('http://localhost:5000/doctor',{
            method : 'POST',
            headers : {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body : JSON.stringify(doctor)
        })
        .then(res => res.json())
        .then(inserted => {
            if(inserted.insertedId){
                alert('Doctor Added SuccessFully')
                reset();
            }
            else{
                alert('Failed To Doctor Added!')
            }
        })
        }
       })
    };

    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-2xl text-green-500'>This is A Add Doctors Page : {services.length}</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name : </span>
                            </label>
                            <input
                                type="name"
                                placeholder="Enter Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'name is required'
                                    },
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Enter Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'email is required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'email is required'
                                    }
                                })}
                            />
                            <label className="label">

                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Specialty</span>
                            </label>
                          <select  {...register('specialty')}  className="input input-bordered select w-full max-w-xs">
                         {
                            services.map(service =><option
                                key={service._id}
                                value={service.name}
                                >{service.name}</option>)
                         }
                    </select>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Photo : </span>
                            </label>
                            <input
                                type="file"
                                className="input input-bordered w-full max-w-xs"
                                {...register("Image", {
                                    required: {
                                        value: true,
                                        message: 'Image is required'
                                    },
                                })}
                            />

                            <label className="label">

                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.Image?.message}</span>}
                            </label>
                        </div>

                        <input type="submit" className="btn btn-outline btn-success w-full max-w-xs " value='Add Doctor' />
                    </form>
        </div>
    );
};

export default AddDoctor;