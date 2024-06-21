-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "jungle_app";

-- CreateEnum
CREATE TYPE "jungle_app"."AUDIT_ACTION" AS ENUM ('ADD', 'DELETE', 'UPDATE');

-- CreateEnum
CREATE TYPE "jungle_app"."system_actions" AS ENUM ('NONE');

-- CreateEnum
CREATE TYPE "jungle_app"."system_modules" AS ENUM ('NONE');

-- CreateTable
CREATE TABLE "jungle_app"."users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "deleted_at" TIMESTAMP(3),
    "id_position" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "jungle_app"."audits" (
    "co_audit" TEXT NOT NULL,
    "no_action" "jungle_app"."AUDIT_ACTION" NOT NULL,
    "dt_action" TIMESTAMP(3) NOT NULL,
    "ds_details" TEXT NOT NULL,
    "no_entity" TEXT NOT NULL,
    "id_entity" TEXT NOT NULL,
    "id_user" TEXT NOT NULL,

    CONSTRAINT "audits_pkey" PRIMARY KEY ("co_audit")
);

-- CreateTable
CREATE TABLE "jungle_app"."positions" (
    "id" TEXT NOT NULL,
    "is_root" BOOLEAN NOT NULL DEFAULT false,
    "name" TEXT NOT NULL,
    "modules" "jungle_app"."system_modules"[],
    "actions" "jungle_app"."system_actions"[],

    CONSTRAINT "positions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_cpf_key" ON "jungle_app"."users"("cpf");

-- CreateIndex
CREATE INDEX "users_cpf_idx" ON "jungle_app"."users"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "positions_name_key" ON "jungle_app"."positions"("name");

-- AddForeignKey
ALTER TABLE "jungle_app"."users" ADD CONSTRAINT "users_id_position_fkey" FOREIGN KEY ("id_position") REFERENCES "jungle_app"."positions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "jungle_app"."audits" ADD CONSTRAINT "audits_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "jungle_app"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
