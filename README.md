# Landing page — Dra. Marina Steffli

Aplicativo React/TypeScript/Vite do projeto `vegan-blood-care`, associado na documentação à LP `lp.dramarinasteffli.com.br`. Repositório Git original preservado, com remote `https://github.com/paradox8bruno/vegan-blood-care.git`.

```sh
npm ci
npm run dev
```

Desenvolvimento configurado na porta 8080. Verificar a URL exibida pelo Vite.

```sh
npm test
npm run build
npm run lint
```

Saída de build em `dist/`. A LP mantém configuração própria de tracking em `public/tracking-config.js`, com GA4 principal e adicional e Pixel já existente; não copiar a configuração vazia do principal sobre ela.

- [Arquitetura do conjunto](https://github.com/paradox8bruno/dra-marina-steffli/blob/main/documentacao/ARQUITETURA.md)
- [Operação e publicação](https://github.com/paradox8bruno/dra-marina-steffli/blob/main/documentacao/OPERACAO.md)
- [Estado e pendências](https://github.com/paradox8bruno/dra-marina-steffli/blob/main/documentacao/ESTADO-E-PENDENCIAS.md)
- [README original da origem](HISTORICO-README.md)

O projeto central é privado; os documentos acima exigem acesso a ele. A LP continua com repositório independente e também integra a pasta central como submódulo. A cópia original não tinha vínculo local `.vercel`, portanto é necessário identificar o projeto existente antes de publicar pela CLI. A atualização deste README não altera código ou configuração de produção.
