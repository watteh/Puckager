﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;

namespace DGFScouting
{
    public class Utility
    {
        // 11/11/18 Minseok Choi
        public static string ConvertToPasswordFormat(string password)
        {
            int numOfLetters = password.Length;
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < numOfLetters; i++)
            {
                sb.Append("*");
            }
            return sb.ToString();
        }

        // 11/11/23 Minseok Choi
        public static AccountType ConvertStringToAccountType(string sAccountType)
        {
            AccountType accountType = new AccountType();

            switch (sAccountType.ToLower())
            {
                case "1":
                case "admin":
                    accountType = AccountType.Admin;
                    break;
                case "2":
                case "coach":
                    accountType = AccountType.Coach;
                    break;
                case "3":
                case "scout":
                    accountType = AccountType.Scout;
                    break;
                case "4":
                case "scheduler":
                    accountType = AccountType.Scheduler;
                    break;
                default:
                    accountType = AccountType.None;
                    break;
            }
            return accountType;
        }
    }
    public enum AccountType
    {
        None = 0,
        Admin = 1,
        Coach = 2,
        Scout = 3,
        Scheduler = 4
    }
}