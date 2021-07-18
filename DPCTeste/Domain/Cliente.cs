using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DPCTeste.Domain
{
    public class Cliente
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Cep { get; set; }
        public string Estado { get; set; }
        public string Cidade { get; set; }
        public string Logradouro { get; set; }
        public string Numero { get; set; }
        public string Telefone { get; set; }
        public DateTime DataNascimento { get; set; }
        public DPCTeste.Utils.Enums.AtivoInativo AtivoInativo { get; set; }
    }
}
