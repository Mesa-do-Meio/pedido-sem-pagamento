-- CreateTable
CREATE TABLE "carrinhos" (
    "id_car" INTEGER NOT NULL,
    "prod_car" INTEGER,
    "qtd_prod_car" INTEGER,
    "desconto_car" DECIMAL,

    CONSTRAINT "carrinhos_pkey" PRIMARY KEY ("id_car")
);

-- CreateTable
CREATE TABLE "clientes" (
    "cpf_cli" BIGINT NOT NULL,
    "nome_cli" VARCHAR(100),
    "email_cli" VARCHAR(50),
    "celular_cli" VARCHAR(15),
    "end_res_cli" VARCHAR(250),
    "senha_cli" VARCHAR(15),
    "data_cadastro_cli" DATE,
    "niver_cli" DATE,
    "trusted_cli" BOOLEAN,

    CONSTRAINT "clientes_pkey" PRIMARY KEY ("cpf_cli")
);

-- CreateTable
CREATE TABLE "pedidos" (
    "id_ped" INTEGER NOT NULL,
    "data_ped" DATE,
    "cpf_cli" BIGINT,
    "id_car_ped" INTEGER,
    "valor_ped" INTEGER,
    "transp_ped" VARCHAR(100),
    "rastreio_ped" VARCHAR(100),
    "end_entrega_ped" VARCHAR(250),

    CONSTRAINT "pedidos_pkey" PRIMARY KEY ("id_ped")
);

-- CreateTable
CREATE TABLE "produtos" (
    "id_prod" VARCHAR(15) NOT NULL,
    "nome_prod" VARCHAR(100),
    "tipo_prod" VARCHAR(50),
    "descr_prod" VARCHAR(255),
    "valor_venda_prod" DECIMAL(10,2),
    "estoque_prod" INTEGER,
    "custo_prod" DECIMAL(10,2),

    CONSTRAINT "produtos_pkey" PRIMARY KEY ("id_prod")
);
