using DPCTeste.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DPCTeste.Models
{
    public class ClienteViewModel
    {
        public Cliente Clientes { get; set; }
        public List<Contato> Contatos { get; set; }
    }
}
