-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "nome" TEXT,
    "sobre_nome" TEXT,
    "senha" TEXT NOT NULL,
    "is_admin" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "eventos" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "local" TEXT NOT NULL,
    "descricao" TEXT,

    CONSTRAINT "eventos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categoria_eventos" (
    "id" TEXT NOT NULL,
    "tipo_cat_evento" TEXT NOT NULL,
    "eventoId" TEXT NOT NULL,

    CONSTRAINT "categoria_eventos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ingressos" (
    "id" TEXT NOT NULL,
    "quantidade_ingresso" INTEGER NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "eventoId" TEXT NOT NULL,

    CONSTRAINT "ingressos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categoria_ingressos" (
    "id" TEXT NOT NULL,
    "tipo_cat_ingresso" TEXT NOT NULL,
    "ingressoId" TEXT NOT NULL,

    CONSTRAINT "categoria_ingressos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lote_ingressos" (
    "id" TEXT NOT NULL,
    "descricao_lote" TEXT NOT NULL,
    "ingressoId" TEXT NOT NULL,

    CONSTRAINT "lote_ingressos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "clientes" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "nome" TEXT,
    "sobre_nome" TEXT,
    "idade" INTEGER NOT NULL,
    "endereco" TEXT NOT NULL,
    "vendaid" TEXT NOT NULL,

    CONSTRAINT "clientes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vendas" (
    "id" TEXT NOT NULL,
    "quantidade_ingresso" INTEGER NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "desconto" DOUBLE PRECISION NOT NULL,
    "data_venda" TIMESTAMP(3) NOT NULL,
    "ingressoId" TEXT NOT NULL,

    CONSTRAINT "vendas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "clientes_email_key" ON "clientes"("email");

-- AddForeignKey
ALTER TABLE "categoria_eventos" ADD CONSTRAINT "categoria_eventos_eventoId_fkey" FOREIGN KEY ("eventoId") REFERENCES "eventos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ingressos" ADD CONSTRAINT "ingressos_eventoId_fkey" FOREIGN KEY ("eventoId") REFERENCES "eventos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "categoria_ingressos" ADD CONSTRAINT "categoria_ingressos_ingressoId_fkey" FOREIGN KEY ("ingressoId") REFERENCES "ingressos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lote_ingressos" ADD CONSTRAINT "lote_ingressos_ingressoId_fkey" FOREIGN KEY ("ingressoId") REFERENCES "ingressos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clientes" ADD CONSTRAINT "clientes_vendaid_fkey" FOREIGN KEY ("vendaid") REFERENCES "vendas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vendas" ADD CONSTRAINT "vendas_ingressoId_fkey" FOREIGN KEY ("ingressoId") REFERENCES "ingressos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
