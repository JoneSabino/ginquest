%% https://github.com/abntex/abntex2/wiki/ComoCustomizar
%%



%%
%% Customizações do abnTeX2 (http://abnTeX2.googlecode.com) para o IFSP-SPO
%%
%% This work may be distributed and/or modified under the
%% conditions of the LaTeX Project Public License, either version 1.3
%% of this license or (at your option) any later version.
%% The latest version of this license is in
%%   http://www.latex-project.org/lppl.txt
%% and version 1.3 or later is part of all distributions of LaTeX
%% version 2005/12/01 or later.
%%
%% This work has the LPPL maintenance status `maintained'.
%% 
%% The Current Maintainer of this work is Ivan F. Martinez, ivanfm
%%
%% Further information about abnTeX2 are available on http://abntex2.googlecode.com/
%%

\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{ifsp-spo}[2016/03/01 v1.0 Modelo do IFSP Campus SPO baseado em abnTeX2]

%
% Repassa todos os parâmetros a classe ifsp, 
\DeclareOption*{%
  \PassOptionsToClass{\CurrentOption}{ifsp}%
}
\ProcessOptions\relax
\LoadClass{ifsp}
% ---
% Pacotes básicos 
% ---
% melhorias de posicionamento https://www.ctan.org/pkg/float
%\usepackage{float}	

\addto\captionsbrazil{
% Ajustes de nomes caso seja necessário
%    \renewcommand{\listfigurename}{Lista de figuras}
}


% Glossario...
% No overleaf Existe alguma incompatibilidade entre o glossario e o abntex2cite
% https://www.ctan.org/pkg/glossaries
%\usepackage[toc,xindy]{glossaries}
%\makeglossaries
%\input{defs-glossario}


\usepackage[alf]{abntex2cite}   % Citações padrão ABNT




\renewcommand{\imprimirifsp}{Instituto Federal de Educação, Ciência e Tecnologia\newline
    Câmpus São Paulo - IFSP}
\renewcommand*{\ifspprefixo}{ifsp-spo}

\local{São Paulo - SP - Brasil}


% Comandos de dados - curso
\providecommand{\imprimircurso}{}
\newcommand{\curso}[1]{\renewcommand{\imprimircurso}{#1}}

% Comandos de dados - departamento
\providecommand{\imprimirdepartamento}{}
\newcommand{\departamento}[1]{\renewcommand{\imprimirdepartamento}{#1}}

% Comandos de dados - disciplina
\providecommand{\imprimirdisciplina}{}
\newcommand{\disciplina}[1]{\renewcommand{\imprimirdisciplina}{#1}}

