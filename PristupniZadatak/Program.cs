using PristupniZadatak.Entities;
using System.Diagnostics;

var builder = WebApplication.CreateBuilder(args);

IConfiguration configuration = builder.Configuration;
builder.Services.Configure<AppSettings>(builder.Configuration.GetSection(AppSettings.SectionName));

var myAlloSpecificOrigins = "_myAlloSpecificOrigins";

builder.Services.AddCors(options =>
{
    string angularOrigin = configuration["AppSettings:AngularOrigin"];
    Debug.WriteLine("Proba:" + angularOrigin);
    options.AddPolicy(name: myAlloSpecificOrigins,
        builder =>
        {
            builder.WithOrigins(angularOrigin)
            .AllowAnyMethod()
            .AllowAnyHeader();
        });
});

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors(myAlloSpecificOrigins);


app.UseAuthorization();

app.MapControllers();

app.Run();
