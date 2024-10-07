/*
  Warnings:

  - You are about to drop the column `product_variant_id` on the `BagItem` table. All the data in the column will be lost.
  - You are about to drop the column `product_id` on the `OrderItem` table. All the data in the column will be lost.
  - You are about to drop the `ProductVariant` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `updated_at` on table `Bag` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `product_variant_size_id` to the `BagItem` table without a default value. This is not possible if the table is not empty.
  - Made the column `updated_at` on table `BagItem` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `Category` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `Likes` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `Order` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `product_variant_size_id` to the `OrderItem` table without a default value. This is not possible if the table is not empty.
  - Made the column `updated_at` on table `OrderItem` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `Payment` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `Review` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "BagItem" DROP CONSTRAINT "BagItem_product_variant_id_fkey";

-- DropForeignKey
ALTER TABLE "OrderItem" DROP CONSTRAINT "OrderItem_product_id_fkey";

-- DropForeignKey
ALTER TABLE "ProductVariant" DROP CONSTRAINT "ProductVariant_product_id_fkey";

-- DropIndex
DROP INDEX "BagItem_product_variant_id_idx";

-- DropIndex
DROP INDEX "OrderItem_order_id_product_id_idx";

-- AlterTable
ALTER TABLE "Bag" ALTER COLUMN "updated_at" SET NOT NULL;

-- AlterTable
ALTER TABLE "BagItem" DROP COLUMN "product_variant_id",
ADD COLUMN     "product_variant_size_id" TEXT NOT NULL,
ALTER COLUMN "updated_at" SET NOT NULL;

-- AlterTable
ALTER TABLE "Category" ALTER COLUMN "updated_at" SET NOT NULL;

-- AlterTable
ALTER TABLE "Likes" ALTER COLUMN "updated_at" SET NOT NULL;

-- AlterTable
ALTER TABLE "Order" ALTER COLUMN "updated_at" SET NOT NULL;

-- AlterTable
ALTER TABLE "OrderItem" DROP COLUMN "product_id",
ADD COLUMN     "product_variant_size_id" TEXT NOT NULL,
ALTER COLUMN "updated_at" SET NOT NULL;

-- AlterTable
ALTER TABLE "Payment" ALTER COLUMN "updated_at" SET NOT NULL;

-- AlterTable
ALTER TABLE "Review" ALTER COLUMN "updated_at" SET NOT NULL;

-- DropTable
DROP TABLE "ProductVariant";

-- CreateTable
CREATE TABLE "ProductVariantColor" (
    "id" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,
    "color" TEXT NOT NULL,

    CONSTRAINT "ProductVariantColor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductVariantSize" (
    "id" TEXT NOT NULL,
    "product_variant_color_id" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "stock" INTEGER NOT NULL DEFAULT 0,
    "stock_status" "PRODUCT_STATUS" NOT NULL DEFAULT 'IN_STOCK',

    CONSTRAINT "ProductVariantSize_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "BagItem_product_variant_size_id_idx" ON "BagItem"("product_variant_size_id");

-- CreateIndex
CREATE INDEX "OrderItem_order_id_product_variant_size_id_idx" ON "OrderItem"("order_id", "product_variant_size_id");

-- AddForeignKey
ALTER TABLE "ProductVariantColor" ADD CONSTRAINT "ProductVariantColor_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductVariantSize" ADD CONSTRAINT "ProductVariantSize_product_variant_color_id_fkey" FOREIGN KEY ("product_variant_color_id") REFERENCES "ProductVariantColor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_product_variant_size_id_fkey" FOREIGN KEY ("product_variant_size_id") REFERENCES "ProductVariantSize"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BagItem" ADD CONSTRAINT "BagItem_product_variant_size_id_fkey" FOREIGN KEY ("product_variant_size_id") REFERENCES "ProductVariantSize"("id") ON DELETE CASCADE ON UPDATE CASCADE;
