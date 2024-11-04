export default async function handler(req, res) {
    if (req.method === "POST") {
      const { username, password } = req.body;
  
      // Thực hiện kiểm tra thông tin người dùng tại đây.
      try {
        // Giả lập việc xác thực với CSDL.
        if (username === "test" && password === "123456") {
          res.status(200).json({ message: "Đăng nhập thành công" });
        } else {
          res.status(401).json({ message: "Tên người dùng hoặc mật khẩu không đúng" });
        }
      } catch (error) {
        res.status(500).json({ message: "Có lỗi xảy ra trong quá trình đăng nhập" });
      }
    } else {
      res.status(405).json({ message: "Phương thức không được phép" });
    }
  }
  