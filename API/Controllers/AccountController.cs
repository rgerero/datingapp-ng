using System.ComponentModel;
using System.Security.Cryptography;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class AccountController(AppDbContext context) : BaseApiController
    {
        [HttpPost("register")]  //api/account/register
        public async Task<ActionResult<AppUser>> Register(string email, string displayName, string password)
        {
            var hmac = new HMACSHA512();
            var user = new AppUser
            {
                Email = email,
                DisplayName = displayName,
                Passwordhash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password)),
                PasswordSalt = hmac.Key
            };

            context.Users.Add(user);
            await context.SaveChangesAsync();

            return user;
        }
    }
}
