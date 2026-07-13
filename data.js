/*
  data.js — banco de componentes do simulador
  -----------------------------------------------
  Cada componente possui:
    id              : identificador único (usado em compatibilidade, nunca o nome)
    nome            : nome exibido na tela
    tipo            : categoria exibida no card da sidebar
    img             : URL da imagem
    slot            : tipo de slot onde a peça encaixa
                      valores válidos: "mb" | "cpu" | "ram" | "gpu" | "storage" | "psu"
    compatibilidade : array de IDs com que esta peça é compatível
*/

const components = [
  {
    id: "mb-b660",
    nome: "Placa-mãe B660M DDR4",
    tipo: "Placa-mãe",
    img: "https://images5.kabum.com.br/produtos/fotos/sync_mirakl/365185/large/Placa-M-e-Gigabyte-B660M-Gaming-X-Intel-LGA-1700-mATX-DDR4_1773266922.jpg",
    slot: "mb",
    compatibilidade: [
      "cpu-i5-12400", "cpu-i7-12700",
      "ram-ddr4",
      "storage-ssd-m2", "storage-hd-sata",
      "gpu-rtx3060", "gpu-rx6600",
      "psu-500w", "psu-650w"
    ]
  },
  {
    id: "mb-z690",
    nome: "Placa-mãe Z690 DDR5",
    tipo: "Placa-mãe",
    img: "https://img.terabyteshop.com.br/produto/g/placa-mae-asus-rog-strix-z690-g-gaming-wifi-chipset-z690-intel-lga-1700-atx-ddr5-rgb-90mb19g0-m0eay0_134230.jpg",
    slot: "mb",
    compatibilidade: [
      "cpu-i5-12400", "cpu-i7-12700",
      "ram-ddr4", "ram-ddr5",
      "storage-ssd-m2", "storage-hd-sata",
      "gpu-rtx3060", "gpu-rx6600",
      "psu-650w", "psu-750w"
    ]
  },
  {
    id: "cpu-i5-12400",
    nome: "Intel Core i5-12400",
    tipo: "Processador",
    img: "https://images.tcdn.com.br/img/img_prod/1165337/processador_intel_core_i5_12400_2_5ghz_4_4ghz_turbo_12a_geracao_6_cores_12_threads_lga_1700_com_cool_21378_1_ac7ae769ec80b8ac59838e3c21cdf964.jpg",
    slot: "cpu",
    compatibilidade: [
      "mb-b660", "mb-z690",
      "ram-ddr4",
      "psu-500w", "psu-650w"
    ]
  },
  {
    id: "cpu-i7-12700",
    nome: "Intel Core i7-12700",
    tipo: "Processador",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwqY3OmIQTcV_bEIT3mF_dcC_8aDe85Li3kOmoDimO-T0mQt_HUvQPAyk&s=10",
    slot: "cpu",
    compatibilidade: [
      "mb-b660", "mb-z690",
      "ram-ddr4", "ram-ddr5",
      "psu-650w", "psu-750w"
    ]
  },
  {
    id: "ram-ddr4",
    nome: "RAM DDR4 16GB",
    tipo: "Memória RAM",
    img: "https://images6.kabum.com.br/produtos/fotos/172366/memoria-kingston-fury-beast-16gb-3200mhz-ddr4-cl16-preto-kf432c16bb1-16_1626271100_g.jpg",
    slot: "ram",
    compatibilidade: [
      "mb-b660", "mb-z690",
      "cpu-i5-12400", "cpu-i7-12700"
    ]
  },
  {
    id: "ram-ddr5",
    nome: "RAM DDR5 16GB",
    tipo: "Memória RAM",
    img: "https://d5gag3xtge2og.cloudfront.net/producao/35306148/G/1.jpg",
    slot: "ram",
    compatibilidade: [
      "mb-z690",
      "cpu-i7-12700"
    ]
  },
  {
    id: "storage-ssd-m2",
    nome: "SSD NVMe M.2 1TB",
    tipo: "Armazenamento",
    img: "https://images2.kabum.com.br/produtos/fotos/621162/ssd-pcie-kingston-nv3-1-tb-m-2-2280-nvme-leitura-6000-mb-s-e-gravacao-4000-mb-s-snv3s-1000g_1726082185_gg.jpg",
    slot: "storage",
    compatibilidade: [
      "mb-b660", "mb-z690"
    ]
  },
  {
    id: "storage-hd-sata",
    nome: "HD SATA 2TB WD Green",
    tipo: "Armazenamento",
    img: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/w/d/wds100t3g0a2.jpg",
    slot: "storage",
    compatibilidade: [
      "mb-b660", "mb-z690"
    ]
  },
  {
    id: "psu-500w",
    nome: "Fonte 500W 80+ Bronze Corsair",
    tipo: "Fonte",
    img: "https://images5.kabum.com.br/produtos/fotos/34215/34215_index_gg.jpg",
    slot: "psu",
    compatibilidade: [
      "mb-b660",
      "cpu-i5-12400",
      "gpu-rx6600",
      "ram-ddr4"
    ]
  },
  {
    id: "psu-650w",
    nome: "Fonte 650W 80+ Gold Corsair",
    tipo: "Fonte",
    img: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/c/p/cp-9020278-br.jpg",
    slot: "psu",
    compatibilidade: [
      "mb-b660", "mb-z690",
      "cpu-i5-12400", "cpu-i7-12700",
      "gpu-rtx3060", "gpu-rx6600",
      "ram-ddr4", "ram-ddr5"
    ]
  },
  {
    id: "psu-750w",
    nome: "Fonte RM 750W 80+ Gold Corsair",
    tipo: "Fonte",
    img: "https://lojaibyte.vteximg.com.br/arquivos/ids/391276-1200-1200/rmbranco0001.jpg",
    slot: "psu",
    compatibilidade: [
      "mb-z690",
      "cpu-i7-12700",
      "gpu-rtx3060",
      "ram-ddr5"
    ]
  }
];
