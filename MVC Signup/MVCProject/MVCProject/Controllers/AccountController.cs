using MVCProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Data.SqlClient;

namespace MVCProject.Controllers
{
    public class AccountController : Controller
    {
        // GET: Account
        public ActionResult Signup()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Signup(Register register)
        {
            if (ModelState.IsValid)
            {
                string connectionString = System.Configuration.ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;

                using (SqlConnection conn = new SqlConnection(connectionString))
                {
                    SqlCommand cmd = new SqlCommand("Dataentry", conn);
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@regname", register.regname);
                    cmd.Parameters.AddWithValue("@email", register.email);
                    cmd.Parameters.AddWithValue("@password", register.password);

                    conn.Open();
                    cmd.ExecuteNonQuery();
                }

                return RedirectToAction("SignupSuccess");
            }

            return View(register);
        }

        public ActionResult Details(int id)
        {
            Register data = null;
            string connectionString = System.Configuration.ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;

            using (SqlConnection conn = new SqlConnection(connectionString))
            {
                string query = "SELECT * FROM Register WHERE regID = @regID";
                SqlCommand cmd = new SqlCommand(query, conn);
                cmd.Parameters.AddWithValue("@regID", id);

                conn.Open();
                SqlDataReader reader = cmd.ExecuteReader();

                if (reader.Read())
                {
                    data = new Register
                    {
                        regID = Convert.ToInt32(reader["regID"]),
                        regname = reader["regname"].ToString(),
                        email = reader["email"].ToString(),
                        password = reader["password"].ToString()
                    };
                }
            }

            return View(data);
        }

        public ActionResult Edit(int id)
        {
            Register data = null;
            string connectionString = System.Configuration.ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;

            using (SqlConnection conn = new SqlConnection(connectionString))
            {
                string query = "SELECT * FROM Register WHERE regID = @regID";
                SqlCommand cmd = new SqlCommand(query, conn);
                cmd.Parameters.AddWithValue("@regID", id);

                conn.Open();
                SqlDataReader reader = cmd.ExecuteReader();

                if (reader.Read())
                {
                    data = new Register
                    {
                        regID = Convert.ToInt32(reader["regID"]),
                        regname = reader["regname"].ToString(),
                        email = reader["email"].ToString(),
                        password = reader["password"].ToString()
                    };
                }
            }

            return View(data);
        }

        [HttpPost]
        public ActionResult Edit(Register model)
        {
            string connectionString = System.Configuration.ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;

            using (SqlConnection conn = new SqlConnection(connectionString))
            {
                string query = "UPDATE Register SET regname = @regname, email = @email, password = @password WHERE regID = @regID";
                SqlCommand cmd = new SqlCommand(query, conn);
                cmd.Parameters.AddWithValue("@regname", model.regname);
                cmd.Parameters.AddWithValue("@password", model.password);
                cmd.Parameters.AddWithValue("@email", model.email);
                cmd.Parameters.AddWithValue("@regID", model.regID);

                conn.Open();
                cmd.ExecuteNonQuery();
            }

            return RedirectToAction("UserList");
        }

        public ActionResult Delete(int id)
        {
            string connectionString = System.Configuration.ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;

            using (SqlConnection conn = new SqlConnection(connectionString))
            {
                string query = "DELETE FROM Register WHERE regID = @regID";
                SqlCommand cmd = new SqlCommand(query, conn);
                cmd.Parameters.AddWithValue("@regID", id);

                conn.Open();
                cmd.ExecuteNonQuery();
            }

            return RedirectToAction("UserList");
        }

        public ActionResult SignupSuccess()
        {
            return View();
        }

        
        public ActionResult UserList()
        {
            List<Register> users = new List<Register>();
            string connectionString = System.Configuration.ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;

            using (SqlConnection conn = new SqlConnection(connectionString))
            {
                string query = "SELECT * FROM Register";
                SqlCommand cmd = new SqlCommand(query, conn);

                conn.Open();
                SqlDataReader reader = cmd.ExecuteReader();

                while (reader.Read())
                {
                    Register user = new Register
                    {
                        regID = Convert.ToInt32(reader["regID"]),
                        regname = reader["regname"].ToString(),
                        email = reader["email"].ToString(),
                        password = reader["password"].ToString()
                    };
                    users.Add(user);
                }
            }

            return View(users);
        }
    }
}
