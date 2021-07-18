using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DPCTeste.Domain
{
    public class Contato
    {
        public int Id { get; set; }
        public int ClienteId { get; set; }
        public Cliente Clientes { get; set; }
        public string Descricao { get; set; }
        public DPCTeste.Utils.Enums.TipoContato TipoContato { get; set; }
        
    }
}
