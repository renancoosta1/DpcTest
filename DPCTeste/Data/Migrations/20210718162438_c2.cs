using Microsoft.EntityFrameworkCore.Migrations;

namespace DPCTeste.Data.Migrations
{
    public partial class c2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Telefone",
                table: "Cliente",
                nullable: true,
                oldClrType: typeof(float),
                oldType: "real");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<float>(
                name: "Telefone",
                table: "Cliente",
                type: "real",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);
        }
    }
}
