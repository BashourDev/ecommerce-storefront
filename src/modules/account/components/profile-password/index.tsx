import { medusaClient } from "@lib/config"
import { Customer } from "@medusajs/medusa"
import Input from "@modules/common/components/input"
import { useUpdateMe } from "medusa-react"
import React, { useEffect } from "react"
import { useForm } from "react-hook-form"
import AccountInfo from "../account-info"
import { useTranslations } from "next-intl"

type MyInformationProps = {
  customer: Omit<Customer, "password_hash">
}

type UpdateCustomerPasswordFormData = {
  old_password: string
  new_password: string
  confirm_password: string
}

const ProfileName: React.FC<MyInformationProps> = ({ customer }) => {
  const [errorMessage, setErrorMessage] = React.useState<string | undefined>(
    undefined
  )
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setError,
  } = useForm<UpdateCustomerPasswordFormData>()
  const t = useTranslations("AccountProfile.edit")
  const {
    mutate: update,
    isLoading,
    isSuccess,
    isError,
    reset: clearState,
  } = useUpdateMe()

  useEffect(() => {
    reset()
  }, [customer, reset])

  const updatePassword = async (data: UpdateCustomerPasswordFormData) => {
    const isValid = await medusaClient.auth
      .authenticate({
        email: customer.email,
        password: data.old_password,
      })
      .then(() => true)
      .catch(() => false)

    if (!isValid) {
      setError("old_password", {
        type: "validate",
        message: t("oldPasswordError"),
      })
      setErrorMessage(t("oldPasswordError"))

      return
    }

    if (data.new_password !== data.confirm_password) {
      setError("confirm_password", {
        type: "validate",
        message: t("passwordsDoNotMatch"),
      })
      setErrorMessage(t("passwordsDoNotMatch"))

      return
    }

    return update({
      id: customer.id,
      password: data.new_password,
    })
  }

  return (
    <form
      onSubmit={handleSubmit(updatePassword)}
      onReset={() => reset()}
      className="w-full"
    >
      <AccountInfo
        label={t("password")}
        currentInfo={
          <span>{t("hiddenPassword")}</span>
        }
        isLoading={isLoading}
        isSuccess={isSuccess}
        isError={isError}
        errorMessage={errorMessage}
        clearState={clearState}
      >
        <div className="grid grid-cols-2 gap-4">
          <Input
            label={t("oldPassword")}
            {...register("old_password", {
              required: true,
            })}
            type="password"
            errors={errors}
          />
          <Input
            label={t("newPassword")}
            type="password"
            {...register("new_password", { required: true })}
            errors={errors}
          />
          <Input
            label={t("confirmPassword")}
            type="password"
            {...register("confirm_password", { required: true })}
            errors={errors}
          />
        </div>
      </AccountInfo>
    </form>
  )
}

export default ProfileName
