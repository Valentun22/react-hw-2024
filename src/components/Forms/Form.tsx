import React, {FC} from 'react';
import {joiResolver} from "@hookform/resolvers/joi";
import {postValidator} from "../Validators/post.validator";
import {useForm} from "react-hook-form";
import {sendPost} from "../Services/post.api.services";
import styles from './styleForm.module.css';

export interface IFormProps {
    title: string,
    body: string,
    userId: number,
}
const FormUser: FC = () => {
    const {handleSubmit, register, formState: {errors}} = useForm<IFormProps>({mode: "all", resolver: joiResolver(postValidator)})
    const sendPostRequest = (post: IFormProps) => {
        sendPost(post).then((response) => console.log(response.data))
    }

    return (
        <div className={styles.generalBlock}>

            <h3>Post</h3>

            <form className={styles.generalColum} onSubmit={handleSubmit(sendPostRequest)}>
                <label>
                    <input type="text" {...register('title')} placeholder={'Enter title of posts'}/>
                    {errors.title && <div>{errors.title.message}</div>}
                </label>

                <label >
                    <input type="text" {...register('body')} placeholder={'Enter body of posts'}/>
                    {errors.body && <div>{errors.body.message}</div>}
                </label>

                <label>
                    <input type="number" {...register('userId' )} placeholder={'Enter user ID'}/>
                    {errors.userId && <div>{errors.userId.message}</div>}
                </label>

                <button>Send post</button>
            </form>
        </div>
    );
};

export default FormUser;