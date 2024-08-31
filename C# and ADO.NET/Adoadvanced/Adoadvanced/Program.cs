using System;
using System.Data;
using System.Data.SqlClient;

class Program
{
    static void Main()
    {
        string connectionString = "Server=LAPTOP-7IH5HMIM\\SQLEXPRESS;Database=CustomerDB;";
        SqlConnection connection = new SqlConnection(connectionString);

        try
        {
            connection.Open();

            SqlCommand command = new SqlCommand("select * from customer", connection);
            SqlDataReader reader = command.ExecuteReader();
            while (reader.Read())
            {
                Console.WriteLine(reader["customer_id"]);
                Console.WriteLine(reader["customer_name"]);
                Console.WriteLine(reader["customer_place"]);
            }
            reader.Close();

            SqlDataAdapter adapter = new SqlDataAdapter("select * from customer", connection);
            DataTable dataTable = new DataTable();
            adapter.Fill(dataTable);
            foreach (DataRow row in dataTable.Rows)
            {
                Console.WriteLine(row["customer_id"]);
                Console.WriteLine(row["customer_name"]);
                Console.WriteLine(row["customer_place"]);
            }

            command = new SqlCommand("GetCustomerById", connection);
            command.CommandType = CommandType.StoredProcedure;
            command.Parameters.AddWithValue("@id", 1);
            reader = command.ExecuteReader();
            while (reader.Read())
            {
                Console.WriteLine(reader["customer_name"]);
                Console.WriteLine(reader["customer_place"]);
            }
            reader.Close();

            command = new SqlCommand("GetCustomerInfo", connection);
            command.CommandType = CommandType.StoredProcedure;
            command.Parameters.AddWithValue("@id", 1);

            SqlParameter outputName = new SqlParameter("@name", SqlDbType.NVarChar, 50) { Direction = ParameterDirection.Output };
            SqlParameter outputPlace = new SqlParameter("@place", SqlDbType.NVarChar, 50) { Direction = ParameterDirection.Output };
            command.Parameters.Add(outputName);
            command.Parameters.Add(outputPlace);

            command.ExecuteNonQuery();
            Console.WriteLine(command.Parameters["@name"].Value);
            Console.WriteLine(command.Parameters["@place"].Value);
        }
        catch (SqlException ex)
        {
            Console.WriteLine("SQL Error: " + ex.Message);
        }
        finally
        {
            connection.Close();
        }
    }
}
