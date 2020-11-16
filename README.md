# Lumen PHP Framework

[![Build Status](https://travis-ci.org/laravel/lumen-framework.svg)](https://travis-ci.org/laravel/lumen-framework)
[![Total Downloads](https://img.shields.io/packagist/dt/laravel/framework)](https://packagist.org/packages/laravel/lumen-framework)
[![Latest Stable Version](https://img.shields.io/packagist/v/laravel/framework)](https://packagist.org/packages/laravel/lumen-framework)
[![License](https://img.shields.io/packagist/l/laravel/framework)](https://packagist.org/packages/laravel/lumen-framework)

Laravel Lumen is a stunningly fast PHP micro-framework for building web applications with expressive, elegant syntax. We believe development must be an enjoyable, creative experience to be truly fulfilling. Lumen attempts to take the pain out of development by easing common tasks used in the majority of web projects, such as routing, database abstraction, queueing, and caching.

<h3>Front End<h3>
    <p>
        <ul>
        <li><a href="https://github.com/thayronFeitosa/front-provaFullstack-1" >Front end do projeto</a></li>
    </ul>
    </p>

<p>
    <h3> <strong>Pra iniciar o projeto e necessário que tenha as dependencias instaladas</strong></h3>
    <ul>
        <li>PHP 7.4</li>
        <li>composer</li>
    </ul>
    <p>
     <h3> Será necessário configurar o acesso ao banco de dados usando:</h3>
     <p>Será necessário criar um arquivo .env na raiz do projeto e colocar o conteudo abaixo.<br>Para que a conexão seja feita com sucesso o banco de dados <strong>bancoProva</strong> ja deve estár criado no Mysql <p>
     
         ```
            APP_NAME=Lumen
            APP_ENV=local
            APP_KEY=
            APP_DEBUG=true
            APP_URL=http://localhost
            APP_TIMEZONE=UTC

            LOG_CHANNEL=stack
            LOG_SLACK_WEBHOOK_URL=

            DB_CONNECTION=mysql
            DB_HOST=127.0.0.1
            DB_PORT=3306
            DB_DATABASE=bancoProva
            DB_USERNAME=root
            DB_PASSWORD=root123

            CACHE_DRIVER=file
            QUEUE_CONNECTION=sync

            JWT_KEY=uma_chave_muito_secreta123

            JWT_SECRET=w66eSGm0UwTv0mUl9Wf1wSKiREAth2F5Y91PccPCWig1Alv0Pa2yNLzKQEs3bZy
        ```
        
   <p>Feito as configurações iniciar basta rodar o comando <strong>composer install</strong> <br><br>
    <h3>Criando tabelas no banco de dados</h3>
        Feitos todos os passos agora e so criar as tabelas no banco de dados usando o comando:<br>
      <ul>
        <li>php artisan migrate</li>
    </ul>
   
   </p>
</p>

## Official Documentation



Documentation for the framework can be found on the [Lumen website](https://lumen.laravel.com/docs).

## Contributing

Thank you for considering contributing to Lumen! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Security Vulnerabilities

If you discover a security vulnerability within Lumen, please send an e-mail to Taylor Otwell at taylor@laravel.com. All security vulnerabilities will be promptly addressed.

## License

The Lumen framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
# api-provaFullstack-1
