import { Tab } from "@headlessui/react"
import { Product } from "@medusajs/medusa"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import Back from "@modules/common/icons/back"
import FastDelivery from "@modules/common/icons/fast-delivery"
import Refresh from "@modules/common/icons/refresh"
import clsx from "clsx"
import { useTranslations } from "next-intl"
import { useMemo } from "react"

type ProductTabsProps = {
  product: PricedProduct
}

const ProductTabs = ({ product }: ProductTabsProps) => {
  const t = useTranslations("Product");
  const tabs = useMemo(() => {
    return [
      {
        label: t("productInformation"),
        component: <ProductInfoTab product={product} />,
      },
      {
        label: t("shippingAndReturns"),
        component: <ShippingInfoTab />,
      },
    ]
  }, [product])

  return (
    <div>
      <Tab.Group>
        <Tab.List className="border-b border-gray-200 box-border grid grid-cols-2">
          {tabs.map((tab, i) => {
            return (
              <Tab
                key={i}
                className={({ selected }) =>
                  clsx(
                    "text-left uppercase text-small-regular pb-2 -mb-px border-b border-gray-200 transition-color duration-150 ease-in-out w-fit",
                    {
                      "border-b border-gray-900": selected,
                    }
                  )
                }
              >
                {tab.label}
              </Tab>
            )
          })}
        </Tab.List>
        <Tab.Panels>
          {tabs.map((tab, j) => {
            return <div key={j}>{tab.component}</div>
          })}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

const ProductInfoTab = ({ product }: ProductTabsProps) => {
  const t = useTranslations("Product");

  return (
    <Tab.Panel className="text-small-regular py-8">
      <div className="grid grid-cols-2 gap-x-8">
        <div className="flex flex-col gap-y-4">
          <div>
            <span className="font-semibold">{t("material")}</span>
            <p>{product.material ? product.material : "-"}</p>
          </div>
          <div>
            <span className="font-semibold">{t("countryOfOrigin")}</span>
            <p>{product.origin_country ? product.origin_country : "-"}</p>
          </div>
          <div>
            <span className="font-semibold">{t("type")}</span>
            <p>{product.type ? product.type.value : "-"}</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <div>
            <span className="font-semibold">{t("weight")}</span>
            <p>{product.weight ? `${product.weight} g` : "-"}</p>
          </div>
          <div>
            <span className="font-semibold">{t("dimensions")}</span>
            <p>
              {product.length && product.width && product.height
                ? `${product.length}L x ${product.width}W x ${product.height}H`
                : "-"}
            </p>
          </div>
        </div>
      </div>
      {product.tags?.length ? (
        <div>
          <span className="font-semibold">{t("tags")}</span>
        </div>
      ) : null}
    </Tab.Panel>
  )
}

const ShippingInfoTab = () => {
  const t = useTranslations("Product");

  return (
    <Tab.Panel className="text-small-regular py-8">
      <div className="grid grid-cols-1 gap-y-8">
        <div className="flex items-start gap-x-2">
          <FastDelivery />
          <div>
            <span className="font-semibold">{t("fastDelivery")}</span>
            <p className="max-w-sm">{t("fastDeliverySubtitle")}
            </p>
          </div>
        </div>
        <div className="flex items-start gap-x-2">
          <Refresh />
          <div>
            <span className="font-semibold">{t("simpleExchanges")}</span>
            <p className="max-w-sm">{t("simpleExchangesSubtitle")}
            </p>
          </div>
        </div>
        <div className="flex items-start gap-x-2">
          <Back />
          <div>
            <span className="font-semibold">{t("easyReturns")}</span>
            <p className="max-w-sm">{t("easyReturnsSubtitle")}
            </p>
          </div>
        </div>
      </div>
    </Tab.Panel>
  )
}

export default ProductTabs
