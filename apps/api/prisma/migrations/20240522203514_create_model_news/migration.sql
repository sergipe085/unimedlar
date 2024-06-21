-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "pesquisa_eleitoral";

-- CreateEnum
CREATE TYPE "jungle_app"."StatusDenuncia" AS ENUM ('PENDENTE', 'EM_REVISAO', 'RESOLVIDA', 'DESCARTADA');

-- CreateTable
CREATE TABLE "pesquisa_eleitoral"."pesquisas_eleitorais" (
    "id" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "quantidade_de_votos" INTEGER NOT NULL DEFAULT 0,
    "data_inicio" TIMESTAMP(3) NOT NULL,
    "data_fim" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "pesquisas_eleitorais_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pesquisa_eleitoral"."candidato_pesquisa" (
    "id" TEXT NOT NULL,
    "candidato_id" INTEGER NOT NULL,
    "quantidade_de_votos" INTEGER NOT NULL DEFAULT 0,
    "pesquisa_eleitoral_id" TEXT,

    CONSTRAINT "candidato_pesquisa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pesquisa_eleitoral"."candidato_pesquisa_voto" (
    "id" SERIAL NOT NULL,
    "candidato_pesquisa_id" TEXT,
    "cpf_votador" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "candidato_pesquisa_voto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pesquisa_eleitoral"."candidatos" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "partido" TEXT NOT NULL,

    CONSTRAINT "candidatos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "jungle_app"."loja_cidadao" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "preco" DECIMAL(65,30) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "loja_cidadao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "jungle_app"."ouvidoria" (
    "id" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "status" "jungle_app"."StatusDenuncia" NOT NULL DEFAULT 'PENDENTE',
    "url_imagem" TEXT,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT NOT NULL,
    "moduloId" TEXT NOT NULL,

    CONSTRAINT "ouvidoria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "jungle_app"."modulosApp" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "icone" TEXT,

    CONSTRAINT "modulosApp_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "jungle_app"."noticias" (
    "id" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT NOT NULL,
    "imagens" TEXT[],

    CONSTRAINT "noticias_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "pesquisa_eleitoral"."candidato_pesquisa" ADD CONSTRAINT "candidato_pesquisa_candidato_id_fkey" FOREIGN KEY ("candidato_id") REFERENCES "pesquisa_eleitoral"."candidatos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pesquisa_eleitoral"."candidato_pesquisa" ADD CONSTRAINT "candidato_pesquisa_pesquisa_eleitoral_id_fkey" FOREIGN KEY ("pesquisa_eleitoral_id") REFERENCES "pesquisa_eleitoral"."pesquisas_eleitorais"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pesquisa_eleitoral"."candidato_pesquisa_voto" ADD CONSTRAINT "candidato_pesquisa_voto_candidato_pesquisa_id_fkey" FOREIGN KEY ("candidato_pesquisa_id") REFERENCES "pesquisa_eleitoral"."candidato_pesquisa"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "jungle_app"."loja_cidadao" ADD CONSTRAINT "loja_cidadao_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "jungle_app"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "jungle_app"."ouvidoria" ADD CONSTRAINT "ouvidoria_moduloId_fkey" FOREIGN KEY ("moduloId") REFERENCES "jungle_app"."modulosApp"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "jungle_app"."ouvidoria" ADD CONSTRAINT "ouvidoria_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "jungle_app"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "jungle_app"."noticias" ADD CONSTRAINT "noticias_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "jungle_app"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
