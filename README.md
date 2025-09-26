# Site Almeida & Merlin Contabilidade

Este repositório contém os arquivos do site da Almeida & Merlin Contabilidade e Assessoria Empresarial, com foco no tutorial sobre o novo sistema de NFS-e.

## Estrutura de Arquivos

- `index.html`: Página inicial do site
- `pages/`: Diretório com as páginas adicionais
  - `sobre.html`: Página sobre a empresa
  - `contato.html`: Página de contato
  - `tutorial-nfse.html`: Página detalhada do tutorial de NFS-e
- `css/`: Diretório com os arquivos de estilo
  - `style.css`: Arquivo CSS principal
- `js/`: Diretório com os arquivos JavaScript
  - `main.js`: Arquivo JavaScript principal
- `images/`: Diretório com todas as imagens utilizadas no site
- `tutorial_nfse_final.pdf`: PDF completo do tutorial para download
- `.htaccess`: Configurações do servidor web Apache

## Instruções de Instalação

### Hospedagem Compartilhada (cPanel, Plesk, etc.)

1. Faça o upload de todos os arquivos e diretórios para o diretório raiz do seu site (geralmente `public_html` ou `www`).
2. Certifique-se de que o arquivo `.htaccess` foi transferido corretamente (é um arquivo oculto).
3. Verifique as permissões dos arquivos:
   - Diretórios: 755 (drwxr-xr-x)
   - Arquivos: 644 (-rw-r--r--)

### Servidor VPS ou Dedicado

1. Transfira os arquivos para o diretório do seu servidor web (geralmente `/var/www/html/` para Apache).
2. Certifique-se de que o módulo `mod_rewrite` do Apache está habilitado:
   ```
   sudo a2enmod rewrite
   sudo systemctl restart apache2
   ```
3. Configure as permissões adequadas:
   ```
   sudo chown -R www-data:www-data /var/www/html/
   sudo find /var/www/html/ -type d -exec chmod 755 {} \;
   sudo find /var/www/html/ -type f -exec chmod 644 {} \;
   ```

## Solução de Problemas

### Estilos CSS não estão carregando

Se os estilos CSS não estiverem carregando corretamente, verifique:

1. Se o arquivo `.htaccess` foi transferido corretamente.
2. Se o servidor web está configurado para permitir arquivos `.htaccess`.
3. Se os caminhos para os arquivos CSS estão corretos.

Para servidores Apache, adicione ao arquivo de configuração do site:

```
<Directory /var/www/html>
    AllowOverride All
</Directory>
```

### Imagens não aparecem

Verifique se:

1. Todas as imagens foram transferidas para o diretório `images/`.
2. As permissões dos arquivos de imagem estão corretas (644).
3. Os caminhos para as imagens nos arquivos HTML estão corretos.

## Personalização

Para personalizar o site:

1. Edite os arquivos HTML para alterar o conteúdo.
2. Modifique o arquivo `css/style.css` para alterar o estilo visual.
3. Atualize as imagens no diretório `images/` conforme necessário.

## Contato

Para suporte ou dúvidas sobre o site, entre em contato com o desenvolvedor.
