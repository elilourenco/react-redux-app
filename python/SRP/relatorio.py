class Relatorio:
    def __init__(self, dados):
        self.dados = dados
            
class Gerar:
    def gerar_relatorio(self):
        # Gerar um relatório em formato de string
        relatorio = "Relatório:\n"
        for dado in self.dados:
            relatorio += f"{dado}\n"
        return relatorio
    
    
class Save:
    def salvar_relatorio(self, caminho):
        # Salva o relatório em um arquivo
        with open(caminho, 'w') as arquivo:
            arquivo.write(self.gerar_relatorio()) 