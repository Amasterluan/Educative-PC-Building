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

const slots = Object.freeze({
    PLACAMAE: "Placa-Mãe",
    CPU: "Processador",
    RAM: "Memória RAM",
    HDSSD: "HD / SSD",
    GPU: "Placa de Video",
    FONTE: "Fonte",
});

const gifsInstalacao = Object.freeze({
  "Placa-Mãe": "https://cdn.dribbble.com/userupload/20003393/file/original-9d8ba1ef66afec7bc0d2130122cf299d.gif", // Exemplo: Colocando a placa no gabinete
  "Processador": "https://i.imgflip.com/1ql8rk.gif", // Exemplo: Travando o processador no socket
  "Memória RAM": "https://media.giphy.com/media/fjTuiCtAHCGDRbbsjg/giphy.gif", // Exemplo: Encaixando a RAM no slot
  "HD / SSD": "https://techguided.com/wp-content/uploads/2019/10/Instal-M2-NVME-SSD.gif", // Exemplo: Colocando o M.2 ou SATA
  "Placa de Video": "https://techguided.com/wp-content/uploads/2019/10/Install-Graphics-Card.gif", // Exemplo: Encaixando no PCI Express
  "Fonte": "https://techguided.com/wp-content/uploads/2019/10/Install-Power-Supply.gif" // Exemplo: Parafusando a fonte ou conectando cabos
});

const descricoesDidaticas = Object.freeze({
  "Placa-Mãe": "É o corpo do computador. Ela funciona como um sistema de estradas e avenidas que interliga todas as outras peças para que elas consigam conversar entre si.",
  "Processador": "É o cérebro do computador! Ele calcula tudo o que acontece no sistema: desde o clique do mouse até a física pesada de um jogo em 3D.",
  "Memória RAM": "É a memória de curto prazo. Ela guarda temporariamente os arquivos dos programas que estão abertos agora. Quando o PC desliga, ela se apaga completamente.",
  "HD / SSD": "É a memória de longo prazo (a mochila do PC). É onde ficam guardados para sempre os seus jogos, fotos e o sistema operacional, mesmo com o computador desligado.",
  "Placa de Video": "É o músculo visual! Ela é especialista em desenhar os gráficos da tela bem rápido, garantindo que os jogos e vídeos rodem sem travar.",
  "Fonte": "É o coração do computador. Ela recebe a energia da tomada e distribui na quantidade exatinha para cada componente funcionar sem queimar."
});

const compatibilidades = Object.freeze({
    LGA: "LGA",
    AM4: "AM4",
    AM5: "AM5",
    DDR4: "MEMÓRIA DDR4",
    DDR5: "MEMÓRIA DDR5",
    NVME2: "SSD NVME2",
    SSDSATA: "SSD SATA",
    HD: "Disco Rigido",
});


const components = [
  {
    id: 1,
    nome: "Placa Mãe AM4 Gigabyte B550M Aorus Elite",
    slot: slots.PLACAMAE,
    img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSBYlZDhrPnTY20y1698ZOUjeEP-WB63bzDU3TctcDqxub1tzcn8wMYtVuN79KZoa7qfGud0dj7T-bNzzGs6TlSd961Dr6m",
    compatibilidade: [
      compatibilidades.AM4, compatibilidades.DDR4, compatibilidades.NVME2, compatibilidades.HD, compatibilidades.SSDSATA,
    ]
  },
  {
    id: 2,
    nome: "Memória DDR4 Kingston Fury Beast, RGB, 8GB, 3200MHz, Black",
    slot: slots.RAM,
    img: "https://img.terabyteshop.com.br/produto/g/memoria-ddr4-kingston-fury-beast-rgb-8gb-3200mhz-black-kf432c16bb2a8_178486.jpg",
    compatibilidade: [
      compatibilidades.DDR4
    ]
  },
  {
    id: 3,
    nome: "SSD Kingston 1TB NV3 M.2 2280 Nvme",
    slot: slots.HDSSD,
    img: "https://images2.kabum.com.br/produtos/fotos/621162/ssd-pcie-kingston-nv3-1-tb-m-2-2280-nvme-leitura-6000-mb-s-e-gravacao-4000-mb-s-snv3s-1000g_1726082185_g.jpg",
    compatibilidade: [
      compatibilidades.NVME2
    ]
  },
  {
    id: 4,
    nome: "Processador Intel Core I5-14400",
    slot: slots.CPU,
    img: "https://images6.kabum.com.br/produtos/fotos/sync_mirakl/524576/xlarge/Processador-Intel-Core-I5-14400-14-Gera-o-3-5-Ghz-4-7-Ghz-Turbo-Cache-20mb-LGA1700-Bx8071514400_1783340619.jpg",
    compatibilidade: [
      compatibilidades.LGA
    ]
  },
  {
    id: 5,
    nome: "Placa Mãe Gigabyte Z590 UD, Intel LGA 1200, ATX, DDR4, M.2 NVMe",
    slot: slots.PLACAMAE,
    img: "https://images0.kabum.com.br/produtos/fotos/210630/placa-mae-gigabyte-z590-ud-rev-1-0-intel-lga1200-atx-ddr4-m-2-nvme-z590-ud_1629734615_gg.jpg",
    compatibilidade: [
      compatibilidades.LGA, compatibilidades.DDR4, compatibilidades.NVME2, compatibilidades.HD, compatibilidades.SSDSATA,
    ]
  },
  // --- PLACAS-MÃE ADICIONAIS ---
  {
    id: 6,
    nome: "Placa Mãe Asus TUF Gaming B650M-Plus, AMD AM5, MATX, DDR5",
    slot: slots.PLACAMAE,
    img: "https://images2.kabum.com.br/produtos/fotos/392052/placa-mae-asus-tuf-gaming-b650m-plus-amd-am5-b650-matx-ddr5-90mb1bg0-m0eay0_1667218383_gg.jpg  ",
    compatibilidade: [
      compatibilidades.AM5, compatibilidades.DDR5, compatibilidades.NVME2, compatibilidades.HD, compatibilidades.SSDSATA,
    ]
  },
  {
    id: 7,
    nome: "Placa Mãe MSI B550M Pro-VDH WiFi, AMD AM4, mATX, DDR4Placa Mãe MSI B550M Pro-VDH WiFi, AMD AM4, mATX, DDR4",
    slot: slots.PLACAMAE,
    img: "https://images8.kabum.com.br/produtos/fotos/114338/placa-mae-msi-b550m-pro-vdh-wifi-amd-am4-matx_1594996443_gg.jpg",
    compatibilidade: [
      compatibilidades.AM4, compatibilidades.DDR4, compatibilidades.NVME2, compatibilidades.HD, compatibilidades.SSDSATA,
    ]
  },
  {
    id: 8,
    nome: "Placa Mãe Asrock B760M Phantom Gaming, Intel LGA1700, DDR5",
    slot: slots.PLACAMAE,
    img: "https://images5.kabum.com.br/produtos/fotos/525045/placa-mae-asrock-b760m-pg-lightning-d4-intel-lga1700-b760-matx-ddr4-90-mxbly-_1718369056_gg.jpg",
    compatibilidade: [
      compatibilidades.LGA, compatibilidades.DDR5, compatibilidades.NVME2, compatibilidades.HD, compatibilidades.SSDSATA,
    ]
  },
  // --- PROCESSADORES ---
  {
    id: 9,
    nome: "Processador AMD Ryzen 5 5600, 3.5GHz (4.4GHz Turbo), 6-Cores AM4",
    slot: slots.CPU,
    img: "https://images-na.ssl-images-amazon.com/images/I/51So7GoGvxL._AC_UL495_SR435,495_.jpg",
    compatibilidade: [
      compatibilidades.AM4
    ]
  },
  {
    id: 10,
    nome: "Processador AMD Ryzen 7 5700X, 3.4GHz (4.6GHz Turbo), AM4",
    slot: slots.CPU,
    img: "https://m.media-amazon.com/images/I/51gRv8z+K6L._AC_UF894,1000_QL80_.jpg",
    compatibilidade: [
      compatibilidades.AM4
    ]
  },
  {
    id: 11,
    nome: "Processador AMD Ryzen 5 7600, 3.8GHz (5.1GHz Turbo), AM5",
    slot: slots.CPU,
    img: "https://cdn.awsli.com.br/600x450/404/404053/produto/257363824/processador-am5-ryzen-5-mftw3gbxcr.jpg",
    compatibilidade: [
      compatibilidades.AM5
    ]
  },
  {
    id: 12,
    nome: "Processador Intel Core i7-14700K, 3.4GHz (5.6GHz Turbo), LGA1700",
    slot: slots.CPU,
    img: "https://images5.kabum.com.br/produtos/fotos/497575/processador-intel-core-i7-14700k-bx8071514700k_1697722245_gg.jpg",
    compatibilidade: [
      compatibilidades.LGA
    ]
  },
  // --- MEMÓRIAS RAM ---
  {
    id: 13,
    nome: "Memória RAM XPG Corsair Corsair Vengeance 16GB, 3200MHz, DDR4",
    slot: slots.RAM,
    img: "https://images2.kabum.com.br/produtos/fotos/382752/memoria-corsair-vengeance-rgb-pro-sl-16gb-3200mhz-ddr4-c16-preto-cmh16gx4m2e3200c16_1665490050_gg.jpg",
    compatibilidade: [
      compatibilidades.DDR4
    ]
  },
  {
    id: 14,
    nome: "Memória RAM Kingston Fury Beast, 16GB, 5600MHz, DDR5, Black",
    slot: slots.RAM,
    img: "https://images7.kabum.com.br/produtos/fotos/285967/memoria-kingston-fury-beast-16gb-5600mhz-ddr5-cl40-preto-kf556c40bb-16_1639574788_gg.jpg",
    compatibilidade: [
      compatibilidades.DDR5
    ]
  },
  {
    id: 15,
    nome: "Memória RAM Corsair Vengeance RGB 32GB (2x16GB), 6000MHz, DDR5",
    slot: slots.RAM,
    img: "https://images3.kabum.com.br/produtos/fotos/988583/memoria-ram-corsair-vengeance-rgb-32gb-2x16gb-6000mhz-ddr5-cl38-intel-xmp-preto-cmh32gx5m2b6000c38-_1769173586_gg.jpg",
    compatibilidade: [
      compatibilidades.DDR5
    ]
  },
  // --- ARMAZENAMENTO (HD / SSD) ---
  {
    id: 16,
    nome: "SSD Crucial P3 Plus 2TB M.2 NVMe PCIe Gen4",
    slot: slots.HDSSD,
    img: "https://m.media-amazon.com/images/I/51xZaoS+Q1L._AC_UF894,1000_QL80_.jpg",
    compatibilidade: [
      compatibilidades.NVME2
    ]
  },
  {
    id: 17,
    nome: "SSD SATA Crucial BX500, 480GB, 2.5 polegadas",
    slot: slots.HDSSD,
    img: "https://images5.kabum.com.br/produtos/fotos/98545/ssd-crucial-bx500-480gb-sata-leitura-540mb-s-gravacao-500mb-s-ct480bx500ssd1_1629125422_gg.jpg",
    compatibilidade: [
      compatibilidades.SSDSATA
    ]
  },
  {
    id: 18,
    nome: "HD Seagate BarraCuda 2TB, 3.5, SATA III, 7200RPM",
    slot: slots.HDSSD,
    img: "https://images6.kabum.com.br/produtos/fotos/100916/100916_1552934430_index_gg.jpg",
    compatibilidade: [
      compatibilidades.HD
    ]
  },
  // --- PLACAS DE VÍDEO ---
  {
    id: 19,
    nome: "Placa de Vídeo RTX 4060 Ti Ventus MSI, 8GB GDDR6",
    slot: slots.GPU,
    img: "https://images5.kabum.com.br/produtos/fotos/461395/placa-de-video-rtx-4060-ti-ventus-msi-nvidia-geforce-8-gb-gddr6-dlss-ray-tracing_1684770175_gg.jpg",
    compatibilidade: [] // Placas de vídeo costumam ser compatíveis com qualquer placa-mãe PCI Express moderna
  },
  {
    id: 20,
    nome: "Placa de Vídeo RX 6750 XT Mech MSI, 12GB GDDR6",
    slot: slots.GPU,
    img: "https://images3.kabum.com.br/produtos/fotos/417853/placa-de-video-rx-6750-xt-mech-2x-12g-oc-msi-amd-12-gb-gddr6-xt-mech-2x-12g-oc_1675857510_gg.jpg",
    compatibilidade: []
  },
  {
    id: 21,
    nome: "Placa de Vídeo RTX 4070 Super Twin X2 Inno3D, 12GB GDDR6X",
    slot: slots.GPU,
    img: "https://images0.kabum.com.br/produtos/fotos/525560/placa-de-video-rtx-4070-ti-super-twin-x2-oc-white-inno3d-nvidia-geforce-16gb-gddr6x-dlss-ray-tracing-g-sync-n407ts2-166xx-186156w_1719515950_gg.jpg",
    compatibilidade: []
  },
  // --- FONTES ---
  {
    id: 22,
    nome: "Fonte Corsair CV650, 650W, 80 Plus Bronze",
    slot: slots.FONTE,
    img: "https://cdn.dooca.store/2624/products/f36002e2acd9e0c065e5f3871211c0e4_640x640+fill_ffffff.jpg?v=1624718055&webp=0",
    compatibilidade: [] // Compatibilidade universal ATX padrão
  },
  {
    id: 23,
    nome: "Fonte MSI Mag A650BN, 650W, 80 Plus Bronze",
    slot: slots.FONTE,
    img: "https://m.media-amazon.com/images/I/81eLlIQ5PsL.jpg",
    compatibilidade: []
  },
  {
    id: 24,
    nome: "Fonte XPG Core Reactor, 850W, 80 Plus Gold, Modular",
    slot: slots.FONTE,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQTkB6VbKEOya8cX2vHxfgundgOFT8ggXmUTrYB8j-cTX6_DkVwZ3rMMQO&s=10",
    compatibilidade: []
  },
  // --- EXTRAS VARIADOS ---
  {
    id: 25,
    nome: "Placa Mãe Asus ROG Strix X670E-E Gaming WiFi, AMD AM5, ATX",
    slot: slots.PLACAMAE,
    img: "https://images8.kabum.com.br/produtos/fotos/376218/placa-mae-asus-rog-strix-x670e-f-gaming-wifi-amd-x670-am5-ddr5-90mb1ba0-m0eay0_1668176718_gg.jpg",
    compatibilidade: [
      compatibilidades.AM5, compatibilidades.DDR5, compatibilidades.NVME2, compatibilidades.HD, compatibilidades.SSDSATA,
    ]
  },
  {
    id: 26,
    nome: "SSD WD Black SN850X 1TB M.2 NVMe PCIe Gen4",
    slot: slots.HDSSD,
    img: "https://images6.kabum.com.br/produtos/fotos/379756/ssd-wd-black-sn850x-gaming-storage-1tb-m-2-2280-pcie-gen4x4-nvme-leitura-7300-mb-s-e-gravacao-6300-mb-s-preto-wds100t2x0e_1666794637_gg.jpg",
    compatibilidade: [
      compatibilidades.NVME2
    ]
  }
];
