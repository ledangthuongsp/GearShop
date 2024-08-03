# GearShop

## Giới thiệu

**GearShop** là một trang web thương mại điện tử chuyên bán các sản phẩm liên quan đến máy ảnh kỹ thuật số và linh kiện như Lens, Tripod, Gimbal, thẻ nhớ, pin, và nhiều hơn nữa. Dự án này được xây dựng nhằm cung cấp cho người dùng trải nghiệm mua sắm trực tuyến thuận tiện và hiệu quả, với giao diện thân thiện và hệ thống quản lý hàng tồn kho chính xác.

## Kiến trúc

Dự án sử dụng kiến trúc microservice để đảm bảo tính mở rộng và độ tin cậy cao. Các thành phần chính của hệ thống bao gồm:

- **Frontend**: Sử dụng Angular với TypeScript để xây dựng giao diện người dùng.
- **Backend**: Sử dụng Node.js và Express.js cho các dịch vụ backend, kết nối với cơ sở dữ liệu MongoDB.
- **Database**: MongoDB được sử dụng để lưu trữ thông tin sản phẩm, đơn hàng, và người dùng.
- **Message Broker**: Sử dụng Apache Kafka để quản lý giao tiếp giữa các microservices.

## Các chức năng chính

- **Trang chủ**: Hiển thị các sản phẩm nổi bật và các khuyến mãi hiện có.
- **Danh mục sản phẩm**: Người dùng có thể duyệt và tìm kiếm các sản phẩm theo danh mục.
- **Chi tiết sản phẩm**: Cung cấp thông tin chi tiết về sản phẩm, hình ảnh, và đánh giá của người dùng.
- **Giỏ hàng**: Quản lý các sản phẩm đã chọn và tiến hành thanh toán.
- **Thanh toán**: Hỗ trợ nhiều phương thức thanh toán an toàn và tiện lợi.
- **Quản lý đơn hàng**: Cho phép người dùng theo dõi trạng thái đơn hàng.
- **Hệ thống đánh giá và bình luận**: Cho phép người dùng chia sẻ ý kiến về sản phẩm.

## Cài đặt và Chạy thử

### Yêu cầu hệ thống

- Node.js v14 trở lên
- MongoDB v4.4 trở lên
- Apache Kafka

### Hướng dẫn cài đặt

1. **Clone repository**:

    ```bash
    git clone https://github.com/username/GearShop.git
    cd GearShop
    ```

2. **Cài đặt các dependencies**:

    ```bash
    npm install
    ```

3. **Cấu hình môi trường**:

    Tạo file `.env` trong thư mục gốc và cấu hình các biến môi trường cần thiết như MongoDB URI, Kafka broker, v.v.

4. **Khởi chạy MongoDB**:

    Nếu bạn chưa có MongoDB chạy trên máy, hãy khởi động nó.

5. **Khởi chạy Kafka**:

    Cấu hình và khởi động Apache Kafka theo hướng dẫn trên [trang chủ Kafka](https://kafka.apache.org/quickstart).

6. **Chạy ứng dụng**:

    ```bash
    npm start
    ```

7. **Truy cập trang web**:

    Mở trình duyệt và truy cập `http://localhost:3000`.

## Đóng góp

Chúng tôi hoan nghênh các đóng góp từ cộng đồng. Vui lòng tạo Pull Request hoặc mở Issue nếu bạn muốn đóng góp cho dự án này.

## Giấy phép

Dự án này được cấp phép theo giấy phép MIT. Xem file [LICENSE](./LICENSE) để biết thêm chi tiết.

