import { CheckoutFormValues } from "@lib/context/checkout-context"
import ConnectForm from "@modules/common/components/connect-form"
import Input from "@modules/common/components/input"
import CountrySelect from "../country-select"
import { useTranslations } from "next-intl"

const BillingAddress = () => {
  const t = useTranslations("CheckoutForm.Addresses");

  return (
    <ConnectForm<CheckoutFormValues>>
      {({ register, formState: { errors, touchedFields } }) => (
        <div className="grid grid-cols-1 gap-y-2">
          <div className="grid grid-cols-2 gap-x-2">
            <Input
                label={t("firstNameLabel")}
                {...register("billing_address.first_name", {
                  required: t("firstNameRequired"),
              })}
              autoComplete="given-name"
              errors={errors}
              touched={touchedFields}
            />
            <Input
                label={t("lastNameLabel")}
              {...register("billing_address.last_name", {
                required: t("lastNameRequired"),
              })}
              autoComplete="family-name"
              errors={errors}
              touched={touchedFields}
            />
          </div>
          <Input
              label={t("companyLabel")}
              {...register("billing_address.company")}
            autoComplete="organization"
            errors={errors}
            touched={touchedFields}
          />
          <Input
              label={t("addressLabel")}
              {...register("billing_address.address_1", {
                required: t("addressRequired"),
            })}
            autoComplete="address-line1"
            errors={errors}
            touched={touchedFields}
          />
          <Input
              label={t("address2Label")}
              {...register("billing_address.address_2")}
            autoComplete="address-line2"
            errors={errors}
            touched={touchedFields}
          />
          <div className="grid grid-cols-[144px_1fr] gap-x-2">
            <Input
                label={t("postalCodeLabel")}
                {...register("billing_address.postal_code", {
                  required: t("postalCodeRequired"),
              })}
              autoComplete="postal-code"
              errors={errors}
              touched={touchedFields}
            />
            <Input
                label={t("cityLabel")}
                {...register("billing_address.city", {
                  required: t("cityRequired"),
              })}
              autoComplete="address-level2"
              errors={errors}
              touched={touchedFields}
            />
          </div>
          <CountrySelect
              placeholder={t("country")}
            {...register("billing_address.country_code", {
              required: t("countryRequired"),
            })}
            autoComplete="country"
            errors={errors}
            touched={touchedFields}
          />
          <Input
              label={t("provinceOrStateLabel")}
              {...register("billing_address.province")}
            autoComplete="address-level1"
            errors={errors}
            touched={touchedFields}
          />
          <Input
              label={t("phoneLabel")}
              {...register("billing_address.phone")}
            autoComplete="tel"
            errors={errors}
            touched={touchedFields}
          />
        </div>
      )}
    </ConnectForm>
  )
}

export default BillingAddress
