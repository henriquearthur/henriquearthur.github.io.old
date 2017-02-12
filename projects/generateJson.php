<?php

$arr = array(
    array(
    'name' => 'cooeemix',
    'desc' => 'fã-site do jogo Club Cooee',
    'imagem' => 'projects/images/cooeemix.png',
    'front_end' => true,
    'back_end' => true,
    'data' => 'Jan/2017',
    'link' => "http://www.cooeemix.com.br",
    'longdesc' => 'Foi desenvolvido portal de notícias, fórum, rankings, enquetes, timeline (portal social), entre outras áreas.'
    ),
    array(
    'name' => 'habblindados',
    'desc' => 'fã-site do jogo Habbo Hotel',
    'imagem' => 'projects/images/manu_hbl.png',
    'front_end' => true,
    'back_end' => true,
    'data' => 'Nov/2016',
    'link' => "http://www.habblindados.com.br",
    'longdesc' => 'Foi desenvolvido página de manutenção com notícias recentes.'
    ),

array(
    'name' => 'icehabbo',
    'desc' => 'fã-site do jogo Habbo Hotel',
    'imagem' => 'projects/images/icehabbo.png',
    'front_end' => true,
    'back_end' => true,
    'data' => 'Out/2016',
    'link' => "http://www.icehb.com.br",
    'longdesc' => 'Foi desenvolvido portal de notícias, fórum de usuários, área de artes, rádio, timeline, console de amigos, entre outras áreas.'
    ),

array(
    'name' => 'whispers',
    'desc' => 'fórum gamer com área para múltiplos jogos',
    'imagem' => 'projects/images/whispers.png',
    'front_end' => true,
    'back_end' => true,
    'data' => 'Jun/2016',
    'link' => false,
    'longdesc' => 'Foi desenvolvido o suporte multi-jogo, área para vídeos, chat de usuários, entre outras áreas.'
    ),

    /*array(
        'name' => 'prohabbo',
        'desc' => 'fã-site do jogo Habbo Hotel',
        'imagem' => 'projects/images/prohabbo.png',
        'front_end' => true,
        'back_end' => false,
        'data' => 'Mar/2016',
        'link' => 'http://www.prohabbo.com.br',
        'longdesc' => 'Foi desenvolvido portal de notícias, fórum de usuários, área de artes, rankings, rádio, entre outras áreas.'
        ),

    array(
        'name' => 'pixelaria',
        'desc' => 'portal com foco em pixel-art',
        'imagem' => 'projects/images/pixelaria.png',
        'front_end' => true,
        'back_end' => false,
        'data' => 'Jan/2016',
        'link' => false,
        'longdesc' => 'Foi desenvolvido a codificação da página inicial do portal.'
        ),

    array(
        'name' => 'manutenção habboz',
        'desc' => 'página de manutenção de um fã-site do jogo Habbo Hotel',
        'imagem' => 'projects/images/manu_habboz.png',
        'front_end' => true,
        'back_end' => false,
        'data' => 'Mai/2015',
        'link' => false,
        'longdesc' => 'Foi desenvolvido a página principal da manutenção.'
        ),

    array(
        'name' => 'habboz',
        'desc' => 'fã-site do jogo Habbo Hotel',
        'imagem' => 'projects/images/habboz.png',
        'front_end' => true,
        'back_end' => false,
        'data' => 'Mai/2015',
        'link' => false,
        'longdesc' => 'Foi desenvolvido a página principal e o fórum do fã-site.'
        ),*/

        array(
            'name' => 'portal idhabbo',
            'desc' => 'portal de conteúdo do jogo Habbo Hotel',
            'imagem' => 'projects/images/idhabbo.png',
            'front_end' => true,
            'back_end' => true,
            'data' => 'Mar/2015',
            'link' => 'http://www.idhabbo.com.br',
            'longdesc' => 'Foi desenvolvido portal de notícias, fórum de usuários, área de artes, rankings, rádio, entre outras áreas.'
            ),

    /*array(
        'name' => 'rádio thehits',
        'desc' => 'uma webrádio com playlists personalizadas',
        'imagem' => 'projects/images/thehits.png',
        'front_end' => true,
        'back_end' => true,
        'data' => 'Dez/2014',
        'link' => false,
        'longdesc' => 'Foi desenvolvido portal de notícias, playlists de músicas via YouTube API, rankings, rádio, entre outras áreas.'
        ),*/

        array(
            'name' => 'portal bobbabr',
            'desc' => 'um portal de conteúdo do jogo Habbo Hotel',
            'imagem' => 'projects/images/bobbabr.png',
            'front_end' => true,
            'back_end' => true,
            'data' => 'Fev/2014',
            'link' => false,
            'longdesc' => 'Foi desenvolvido portal de notícias, fórum de usuários, área de artes, rankings, entre outras áreas.'
            ),
        );

file_put_contents("list.json", json_encode($arr));
