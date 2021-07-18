using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;

namespace DPCTeste.Utils.Enums
{
    public enum TipoContato
    {
        [Description ("Celular")]
        [DefaultValue (0)]
        Celular,

        [Description ("Trabalho")]
        [DefaultValue (1)]
        Trabalho,

        [Description ("Email")]
        [DefaultValue (2)]
        Email,

        [Description ("Outro")]
        [DefaultValue (3)]
        Outro,

    }
}
