import React, { useState } from 'react'

//* Translations
import { useTranslations } from 'next-intl';

//* Styles
import globals from '@/styles/Main.module.scss';
import styles from '../styles/ContactForm.module.scss';

const ContactForm = () => {

    const [ form, setForm ] = useState({
        "email": "",
        "subject": "e_learning",
        "description": ""
    })

    const t = useTranslations("contact_us")

    function onChange(e){
        let newForm = { ...form }
        const id = e.currentTarget.id
        const value = e.currentTarget.value

        newForm[id] = value

        setForm(newForm)
    }

    function onSubmit(e){
        e.preventDefault()
        console.log(form)
    }

  return (
    <form 
        id="contact-form"
        className={styles['contact-form']}
        onSubmit={onSubmit}
        >
            <div className={styles["form-row"]}>
                <div className={styles["input-container"]}>
                    <label 
                        htmlFor="email" 
                        className={styles["label"]}
                        >
                            { t("form.email_container.label") }
                    </label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        onChange={onChange}
                        placeholder={ t("form.email_container.placeholder") }
                        value={form.email}
                        className={styles["email-input"]}
                    />
                </div>
                <div className={styles["input-container"]}>
                    <label 
                        htmlFor="subject" 
                        className={styles["label"]}
                        >
                            { t("form.subject_container.label") }
                    </label>
                    <select
                        className={styles['select-input']}
                        id="subject"
                        onChange={onChange}
                        value={form.subject}
                    >
                        <option value="e_learning">{ t("form.subject_container._1") }</option>
                        <option value="business">{ t("form.subject_container._2") }</option>
                        <option value="sve_experience">{ t("form.subject_container._3") }</option>
                    </select>
                </div>
            </div>
            <div className={styles["input-container"]}>
                <label 
                    htmlFor="description"
                    className={styles['label']}
                    >
                        { t("form.description_container.label") }
                </label>
                <textarea 
                    name="description" 
                    id="description" 
                    cols="30" 
                    rows="10"
                    className={styles['textarea-input']}
                    onChange={onChange}
                    placeholder={ t("form.description_container.placeholder") }
                    value={form.description}
                    >
                </textarea>
            </div>
            <button 
                type="submit"
                className={`${globals['btn']} ${styles["btn-submit"]}`}
                >
                    { t("form.submit") }
            </button>
    </form>
  )
}

export default ContactForm