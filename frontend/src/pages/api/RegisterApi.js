export default async function handler(req, res) {
    if (req.method === "POST") {
      const { username, password, email } = req.body;
  
      // Thực hiện lưu thông tin người dùng vào cơ sở dữ liệu tại đây.
      try {
        // Giả lập việc lưu vào CSDL.
        res.status(200).json({ message: "Đăng ký thành công" });
      } catch (error) {
        res.status(500).json({ message: "Có lỗi xảy ra trong quá trình đăng ký" });
      }
    } else {
      res.status(405).json({ message: "Phương thức không được phép" });
    }
  }
  