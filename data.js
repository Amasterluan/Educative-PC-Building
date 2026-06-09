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
    img: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png",
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
    img: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png",
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
    img: "https://cdn-icons-png.flaticon.com/512/984/984196.png",
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
    img: "https://cdn-icons-png.flaticon.com/512/984/984196.png",
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
    img: "https://cdn-icons-png.flaticon.com/512/984/984233.png",
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
    img: "https://cdn-icons-png.flaticon.com/512/984/984233.png",
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
    img: "https://cdn-icons-png.flaticon.com/512/984/984204.png",
    slot: "storage",
    compatibilidade: [
      "mb-b660", "mb-z690"
    ]
  },
  {
    id: "storage-hd-sata",
    nome: "HD SATA 2TB",
    tipo: "Armazenamento",
    img: "https://cdn-icons-png.flaticon.com/512/984/984204.png",
    slot: "storage",
    compatibilidade: [
      "mb-b660", "mb-z690"
    ]
  },
  {
    id: "gpu-rtx3060",
    nome: "NVIDIA RTX 3060",
    tipo: "Placa de Vídeo",
    img: "https://cdn-icons-png.flaticon.com/512/984/984225.png",
    slot: "gpu",
    compatibilidade: [
      "mb-b660", "mb-z690",
      "psu-650w", "psu-750w"
    ]
  },
  {
    id: "gpu-rx6600",
    nome: "AMD RX 6600",
    tipo: "Placa de Vídeo",
    img: "https://cdn-icons-png.flaticon.com/512/984/984225.png",
    slot: "gpu",
    compatibilidade: [
      "mb-b660", "mb-z690",
      "psu-500w", "psu-650w"
    ]
  },
  {
    id: "psu-500w",
    nome: "Fonte 500W 80+ Bronze",
    tipo: "Fonte",
    img: "https://cdn-icons-png.flaticon.com/512/984/984244.png",
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
    nome: "Fonte 650W 80+ Gold",
    tipo: "Fonte",
    img: "https://cdn-icons-png.flaticon.com/512/984/984244.png",
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
    nome: "Fonte 750W 80+ Gold",
    tipo: "Fonte",
    img: "https://cdn-icons-png.flaticon.com/512/984/984244.png",
    slot: "psu",
    compatibilidade: [
      "mb-z690",
      "cpu-i7-12700",
      "gpu-rtx3060",
      "ram-ddr5"
    ]
  }
];
