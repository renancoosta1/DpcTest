using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;

namespace DPCTeste.Utils.Enums
{
    public enum AtivoInativo
    {
        [Description ("Ativo")]
        [DefaultValue(0)]
        Ativo,

        [Description("Inativo")]
        [DefaultValue(1)]
        Inativo,
    }
}
