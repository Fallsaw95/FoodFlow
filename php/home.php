<?php
// Form Validation for signup

	if(isset($_POST['submit']))
	{
		$name = $_POST['name'];
		$email = $_POST['email'];
		$password = $_POST['password'];
		$password2 = $_POST['<PASSWORD>'];

		
		if(empty($name) || empty($email) || empty($password) || empty($password2))
		{
			header("Location: ../signup.php?signup=empty");
			exit();
		}
		else if(!filter_var($email, FILTER_VALIDATE_EMAIL))
		{
			header("Location: ../signup.php?signup=invalid");
			exit();
		}
		else if(!preg_match("/^[a-zA-Z0-9]*$/", $name))
        {
            header("Location: ../signup.php?signup=invalid");
            exit();
        }
		else if(!preg_match("/^[a-zA-Z0-9]*$/", $password))
        {
            header("Location: ../signup.php?signup=invalid");
            exit();
        }
		else if(!preg_match("/^[a-zA-Z0-9]*$/", $password2))
        {
            header("Location: ../signup.php?signup=invalid");
            exit();
        }
		else if($password!== $password2)
        {
            header("Location: ../signup.php?signup=invalid");
            exit();
        }
		else
		{
			$sql = "SELECT email FROM users WHERE email=?";
			$stmt = mysqli_stmt_init($conn);
			if(!mysqli_stmt_prepare($stmt, $sql))
			{
				header("Location:../signup.php?error=sqlerror");
				exit();
			}
			else
			{
				mysqli_stmt_bind_param($stmt, "s", $email);
                mysqli_stmt_execute($stmt);
				$result = mysqli_stmt_get_result($stmt);
				if(mysqli_num_rows($result) > 0)
				{
					header("Location:../signup.php?signup=usertaken");
                    exit();
				}
				else
				{
					$sql = "INSERT INTO users (name, email, password) VALUES (?,?,?)";
					$stmt = mysqli_stmt_init($conn);
					if(!mysqli_stmt_prepare($stmt, $sql)){
                        header("Location:../signup.php?error=sqlerror");
                        exit();
                    }
					else
					{
						$hashedpassword = password_hash($password, PASSWORD_DEFAULT);
						mysqli_stmt_bind_param($stmt, "sss", $name, $email, $hashedpassword);
						mysqli_stmt_execute($stmt);
						header("Location:../signup.php?signup=success");
						exit();
					}
                    }
        }
    }
    }
?>