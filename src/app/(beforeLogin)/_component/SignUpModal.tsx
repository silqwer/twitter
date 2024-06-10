import BackButton from "@/app/(afterLogin)/_component/BackButton";
import style from "./signUp.module.css";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";

export default function SignUpModal() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [image, setImage] = useState("");
  const [imageFile, setImageFile] = useState<File>();

  const router = useRouter();

  const submit = async (formData: FormData) => {
    'use server';
    
    if(!formData.get("id")) {
      return {message: 'no_id'};
    }

    if(!formData.get("name")) {
      return {message: 'no_name'};
    }


    if(!formData.get("password")) {
      return {message: 'no_password'}
    }

    if(!formData.get("image")) {
      return {message: 'no_image'}
    }

    let shouldRedirect = false;

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}`, {
        method: "POST",
        body: formData,
        credentials: "include",
      });

      if(response.status === 403) {
        return {message: 'already_exist'};
      }

      shouldRedirect = true;
    } catch (error) {
      console.error(error);
      return;
    }
    if(shouldRedirect){
      redirect("/home");
    }
  }

  return (
    <>
      <div className={style.modalBackground}>
        <div className={style.modal}>
          <div className={style.modalHeader}>
            <BackButton />
            <div>계정을 생성하세요.</div>
          </div>
          <form action={submit}>
            <div className={style.modalBody}>
              <div className={style.inputDiv}>
                <label className={style.inputLabel} htmlFor="id">
                  아이디
                </label>
                <input
                  id="id"
                  name="id"
                  className={style.input}
                  type="text"
                  placeholder=""
                  value={id}
                  required
                />
              </div>
              <div className={style.inputDiv}>
                <label className={style.inputLabel} htmlFor="name">
                  닉네임
                </label>
                <input
                  id="name"
                  name="name"
                  className={style.input}
                  type="text"
                  placeholder=""
                  value={nickname}
                  required
                />
              </div>
              <div className={style.inputDiv}>
                <label className={style.inputLabel} htmlFor="password">
                  비밀번호
                </label>
                <input
                  id="password"
                  name="password"
                  className={style.input}
                  type="password"
                  placeholder=""
                  value={password}
                  required
                />
              </div>
              <div className={style.inputDiv}>
                <label className={style.inputLabel} htmlFor="image">
                  프로필
                </label>
                <input
                  id="image"
                  name="image"
                  className={style.input}
                  type="file"
                  accept="image/*"
                  required
                />
              </div>
            </div>
            <div className={style.modalFooter}>
              
              
              <button type="submit" className={style.actionButton}>
                가입하기
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
