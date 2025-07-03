from flask import Flask, render_template, jsonify, request
import json
import os

app = Flask(__name__)

IDIOMAS_SUPORTADOS = ['pt', 'en', 'es']

def carregar_perguntas(idioma='pt'):
    if idioma not in IDIOMAS_SUPORTADOS:
        idioma = 'pt'
    caminho = f"dados/perguntas_{idioma}.json"
    with open(caminho, encoding="utf-8") as f:
        return json.load(f)

def carregar_ranking():
    if not os.path.exists("dados/ranking.json"):
        return []
    with open("dados/ranking.json", encoding="utf-8") as f:
        return json.load(f)

def salvar_ranking(nome, pontos):
    ranking = carregar_ranking()
    
    # Verificar se o jogador já existe
    jogador_existente = None
    for jogador in ranking:
        if jogador['nome'] == nome:
            jogador_existente = jogador
            break
    
    if jogador_existente:
        # Somar pontos ao jogador existente
        jogador_existente['pontos'] += pontos
    else:
        # Adicionar novo jogador
        ranking.append({"nome": nome, "pontos": pontos})
    
    # Ordenar por pontos e manter apenas os top 10
    ranking.sort(key=lambda x: x['pontos'], reverse=True)
    with open("dados/ranking.json", "w", encoding="utf-8") as f:
        json.dump(ranking[:10], f, indent=2, ensure_ascii=False)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/perguntas")
def perguntas():
    idioma = request.args.get("lang", 'pt')
    return jsonify(carregar_perguntas(idioma))

@app.route("/pontuar", methods=["POST"])
def pontuar():
    data = request.get_json()
    nome = data.get("nome")
    pontos = data.get("pontos")
    salvar_ranking(nome, pontos)
    return jsonify({"status": "ok"})

@app.route("/ranking")
def ranking():
    return jsonify(carregar_ranking())

@app.route("/minijogo")
def minijogo():
    return render_template("minijogo.html")

if __name__ == "__main__":
    app.run()
