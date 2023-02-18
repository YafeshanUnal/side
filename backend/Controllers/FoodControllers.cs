using System;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using backend.Entities;

namespace backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FoodControllers : ControllerBase
    {
        public FoodControllers() { }

        // food entity array olarak dön
        public string[] Foods = new[]
        {
            "Freezing",
            "Bracing",
            "Chilly",
            "Cool",
            "Mild",
            "Warm",
            "Balmy",
            "Hot",
            "Sweltering",
            "Scorching"
        };

        [HttpGet("foods")]
        public IActionResult GetFoods()
        {
            return Ok(Foods);
        }
    }
}
