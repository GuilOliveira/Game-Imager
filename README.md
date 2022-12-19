<h1 class="code-line" data-line-start=0 data-line-end=1 ><a id="Sprint_2__Compass_0"></a>Sprint 2 - Compass</h1>
<h3 class="code-line" data-line-start=1 data-line-end=2 ><a id="Criando_uma_aplicao_com_node_e_consumindo_uma_API_1"></a>Criando uma aplicação com node e consumindo uma API!</h3>
<hr>
<h3 class="code-line" data-line-start=4 data-line-end=5 ><a id="Objetivo_4"></a>Objetivo:</h3>
<p class="has-line-data" data-line-start="5" data-line-end="6">O objetivo dessa avaliação é criar uma aplicação utilizando node.js(Uma ferramenta capaz de executar códigos em javascript fora de um navegador) e consumir uma API(Application Programming Interface)</p>
<p class="has-line-data" data-line-start="7" data-line-end="8">A API escolhida foi a <strong>RAWG Video Game Database</strong>, ela fornece dados como: nome, notas, imagens e muito mais coisas de vários jogos. De acordo com o site Fastapi, é uma das mais bem avaliadas no nicho de video-games.</p>
<p class="has-line-data" data-line-start="9" data-line-end="10">A aplicação em sí, é um site que visa entregar wallpapers e imagens de qualquer jogo requisitado em uma boa resolução.</p>
<img src="https://cdn.discordapp.com/attachments/623271108593975326/1054338189206237274/image.png"/>
<hr>
<h3 class="code-line" data-line-start=12 data-line-end=13 ><a id="O_que_foi_utilizado_no_desenvolvimento_12"></a>O que foi utilizado no desenvolvimento?</h3>
<ul>
<li class="has-line-data" data-line-start="13" data-line-end="14"><strong>Node.js</strong> - Para executaro código javascript no terminal</li>
<li class="has-line-data" data-line-start="14" data-line-end="15"><strong>React</strong> - Apenas para fins de organização e estudos</li>
<li class="has-line-data" data-line-start="15" data-line-end="16"><strong>APIs</strong> - Como já havia falado, foi utilizada a api do RAWG</li>
<li class="has-line-data" data-line-start="16" data-line-end="17"><strong>Git/Github</strong> - Para versionamento e compartilhamento de códigos</li>
<li class="has-line-data" data-line-start="17" data-line-end="19"><strong>VsCode</strong> - Programação da aplicação</li>
</ul>
<h3 class="code-line" data-line-start=19 data-line-end=20 ><a id="Como_rodar_o_cdigo_19"></a>Como rodar o código?</h3>
<p class="has-line-data" data-line-start="20" data-line-end="21">Passo 1: Pegar uma chave da API em <a href="http://rawg.io/">rawg.io/</a></p>
<p class="has-line-data" data-line-start="22" data-line-end="23">Passo 2: Clonar o Repositório ou baixar o código fonte.</p>
<img src="https://media.discordapp.net/attachments/623271108593975326/1054341718310395904/image.png?width=720&height=140">
<p class="has-line-data" data-line-start="24" data-line-end="25">Passo 3: Na pasta do projeto abra o terminal e digite:</p>
<pre><code class="has-line-data" data-line-start="26" data-line-end="28" class="language-sh">npm install
</code></pre>
<p class="has-line-data" data-line-start="28" data-line-end="29">Ele instalará todas as dependencias necessárias para o projeto.</p>
<img src="https://media.discordapp.net/attachments/623271108593975326/1054341969247227954/image.png"/>
<p class="has-line-data" data-line-start="30" data-line-end="31">Passo 4: Colocar no arquivo “main.js” a sua chave de acesso à API.</p>
<img src="https://media.discordapp.net/attachments/623271108593975326/1054343593176866827/image.png"/>
<p class="has-line-data" data-line-start="32" data-line-end="33">Passo 5: Agora é só digitar o comando:</p>
<pre><code class="has-line-data" data-line-start="34" data-line-end="36" class="language-sh">npm start
</code></pre>
<p class="has-line-data" data-line-start="36" data-line-end="37">E o node vai iniciar um servidor local.</p>
<h3 class="code-line" data-line-start=38 data-line-end=39 ><a id="Como_foi_feito_38"></a>Como foi feito?</h3>
<p class="has-line-data" data-line-start="40" data-line-end="41">Assim como mostrei antes, o primeiro passo foi fazer um fork do repositório da avaliação, e ai fazer um clone do repo:</p>
<p class="has-line-data" data-line-start="42" data-line-end="43">Depois, usamos um comando para auxiliar a fazer o setup da aplicação react criando pastas, arquivos e facilitando esse primeiro passo, o comando é:</p>
<img src="https://media.discordapp.net/attachments/623271108593975326/1054349843570642974/image.png?width=720&height=135"/>
<pre><code class="has-line-data" data-line-start="44" data-line-end="46" class="language-sh">npx create-react-app <span class="hljs-string">"game-merger"</span>
</code></pre>
<img src="https://media.discordapp.net/attachments/623271108593975326/1054349955906678825/image.png"/>
