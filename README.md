# Demo JHipster với JDL Studio để tạo web

## JHipster là gì?

JHipster là một trình tạo mã cấp cao được xây dựng dựa trên một danh sách phong phú các công cụ và nền tảng phát triển tiên tiến.
Các thành phần chính của công cụ là:

Yeoman, một công cụ giàn giáo phía trước

Old Good Spring Boot

AngularJS, framework Javascript nổi bật. JHipster cũng làm việc với AngularJS 2

JHipster tạo ra, chỉ với một vài lệnh shell, một dự án web Java chính thức với giao diện người dùng thân thiện, đáp ứng, REST API được lập thành văn bản, phạm vi kiểm tra toàn diện, bảo mật cơ bản và tích hợp cơ sở dữ liệu! Mã kết quả được nhận xét tốt và tuân theo các phương pháp hay nhất của ngành.
Các công nghệ chính khác được nó tận dụng là:

Swagger, cho tài liệu API

Maven, Npm, Yarn, Gulp và Bower với tư cách là quản lý dependency và xây dựng công cụ

Jasmine, Protractor, Cucumber và Gatling làm khung thử nghiệm

Liquibase để lập phiên bản cơ sở dữ liệu

Chúng ta không bắt buộc phải sử dụng tất cả các mục này trên ứng dụng đã tạo của chúng ta. Các mục tùy chọn được chọn trong quá trình tạo dự án.
![image](https://github.com/HungHyperX/DemoJHipster/assets/131465286/b8536355-b051-40b5-833a-20c4bdb01206)

Một ứng dụng đẹp do JHipster tạo.

## Cài đặt JHipster

- Bước 1: Cài đặt
[JDK](https://www.oracle.com/java/technologies/downloads)
- Bước 2: Cài đặt
[NodeJS](https://nodejs.org/en/download)
- Bước 3: Cài đặt Git
- Bước 4: Cài đặt JHiupster 8
  Mở cmd/terminal/Powershell, gõ lệnh
``
npm i -g generator-jhipster@8.1.0
``

## Demo tạo Project với MySQL
- Bước 1: Tạo Project
  Tạo thư mục **DemoJHipster**.
  
``
mkdir DemoJHipster
``

``
cd DemoJHipster
``               

![image](https://github.com/HungHyperX/DemoJHipster/assets/131465286/d1f11dbe-cda0-4245-a930-76420845254d)

  Gõ lệnh
  ``
  jhipster
  ``để bắt đầu, và cài đặt như trong hình.
  
![image](https://github.com/HungHyperX/DemoJHipster/assets/131465286/3fabde63-dc17-449c-b46c-3453578a03d3)

- Bước 2: Tạo file jdl trên JDL-studio của Jhipster

Tạo/Viết/Chỉnh sửa dữ liệu trên [JDL Studio](https://start.jhipster.tech/jdl-studio)

![image](https://github.com/HungHyperX/DemoJHipster/assets/131465286/5f6ac1a4-c9ae-4db2-953e-6a64c9392f51)

Tải về, ta sẽ được file **jhipster-jdl.jdl**. Sau đó hãy Cắt và Dán nó ở đường dẫn như hình

![image](https://github.com/HungHyperX/DemoJHipster/assets/131465286/9dcd729e-ec52-4220-a3da-323255d13559)

Chạy lệnh ``jhipster jdl jhipster-jdl.jdl``. 

![image](https://github.com/HungHyperX/DemoJHipster/assets/131465286/aaa39fce-ae41-4997-8a64-51dba8a9663f)

Nếu có conflict, hãy gõ ``a`` để ghi đè toàn bộ.

![image](https://github.com/HungHyperX/DemoJHipster/assets/131465286/91c6f69f-5bf2-48f5-a276-29e428a32947)

- Bước 3: Tạo Database và connect với Database qua MySQL
  Khởi động MySQL và tạo Connection, sau đó tạo Schema, và chỉnh sửa file resource như hình
  
![image](https://github.com/HungHyperX/DemoJHipster/assets/131465286/e0e052d8-cdb3-437a-b8f0-458518c11902)

Gõ lệnh ``./mvnw`` hoặc ``mvnw`` để chạy phần BackEnd

![image](https://github.com/HungHyperX/DemoJHipster/assets/131465286/ae2e1e11-0528-4cbe-a161-d8176ff43c49)

Gõ ``npm start`` để khởi động FrontEnd

![image](https://github.com/HungHyperX/DemoJHipster/assets/131465286/64509016-35dd-4b56-a3dc-9a7c861b9152)

Demo thành phẩm

![image](https://github.com/HungHyperX/DemoJHipster/assets/131465286/bd08f7b8-0533-4766-9d7c-82acc43a36c6)

Đăng nhập tài khoản admin

![image](https://github.com/HungHyperX/DemoJHipster/assets/131465286/3eaca34e-4f1a-405b-8fbf-6da942a2981a)

Đăng nhập thành công

![image](https://github.com/HungHyperX/DemoJHipster/assets/131465286/0fe3d6a5-cfc7-4636-8034-310211986213)

Theo dõi dữ liệu:
![image](https://github.com/HungHyperX/DemoJHipster/assets/131465286/f3b557e7-739a-496d-b6f9-1cdb8c4a01d2)
![image](https://github.com/HungHyperX/DemoJHipster/assets/131465286/aab124c9-cc09-4707-ad12-b71e6c7ad168)
![image](https://github.com/HungHyperX/DemoJHipster/assets/131465286/1a188f44-d5e8-463d-a961-501859e62f4d)

## Ưu điểm
- Tăng tốc độ phát triển:

    JHipster cung cấp một bộ khởi động đầy đủ tính năng với các cấu hình và thư viện được thiết lập sẵn, giúp bạn tiết kiệm thời gian thiết lập dự án và cho phép bạn tập trung vào việc phát triển các tính năng.
  
    JHipster sử dụng Yeoman, một công cụ tự động hóa mạnh mẽ, giúp bạn tự động hóa các tác vụ lặp đi lặp lại và tạo ra mã boilerplate một cách nhanh chóng.
  
    JHipster hỗ trợ nhiều công nghệ web hiện đại, giúp bạn dễ dàng xây dựng các ứng dụng web mạnh mẽ và có khả năng mở rộng.
  
- Cải thiện năng suất:

    JHipster cung cấp một quy trình phát triển được xác định rõ ràng, giúp bạn dễ dàng cộng tác với các nhà phát triển khác trong nhóm.

    JHipster giúp bạn tránh các lỗi phổ biến và đảm bảo rằng ứng dụng của bạn tuân theo các nguyên tắc thiết kế tốt nhất.
  
    JHipster cung cấp một bộ công cụ tích hợp để kiểm tra và gỡ lỗi ứng dụng của bạn, giúp bạn tiết kiệm thời gian và công sức.
  
- Dễ dàng sử dụng:

    JHipster cung cấp một giao diện dòng lệnh đơn giản và dễ sử dụng, giúp bạn dễ dàng tạo và quản lý các dự án.
  
    JHipster có một cộng đồng lớn và tích cực, cung cấp tài liệu và hỗ trợ toàn diện.
  
    JHipster cung cấp nhiều mẫu và hướng dẫn, giúp bạn dễ dàng học cách sử dụng các tính năng khác nhau của nó.
  
==> Tóm lại, JHipster là một công cụ mạnh mẽ và linh hoạt giúp bạn tăng tốc độ phát triển, cải thiện năng suất và tạo ra các ứng dụng web hiện đại.

**Lưu ý:** JHipster không phải là một giải pháp phù hợp cho tất cả các dự án. Nếu bạn cần xây dựng một ứng dụng web đơn giản hoặc có yêu cầu cụ thể, JHipster có thể không phải là lựa chọn tốt nhất. Tuy nhiên, nếu bạn đang tìm kiếm một công cụ giúp bạn tăng tốc độ phát triển và tạo ra các ứng dụng web chất lượng cao, JHipster là một lựa chọn đáng cân nhắc.

## Nhược điểm

- Khó khăn trong việc tùy chỉnh:

    JHipster tạo ra các ứng dụng với cấu trúc và chức năng được xác định trước, điều này có thể khiến việc tùy chỉnh giao diện hoặc chức năng ứng dụng trở nên khó khăn.
  
    Việc thay đổi cấu trúc ứng dụng có thể dẫn đến xung đột với các tính năng do JHipster cung cấp.
  
- Tính phụ thuộc vào JHipster:

    Việc sử dụng JHipster khiến ứng dụng phụ thuộc vào framework này.
  
    Việc cập nhật JHipster có thể dẫn đến lỗi hoặc xung đột với ứng dụng hiện có.

- Kích thước ứng dụng:

    Các ứng dụng JHipster thường có kích thước lớn hơn các ứng dụng được viết tay do bao gồm nhiều thư viện và chức năng.
  
    Điều này có thể ảnh hưởng đến hiệu suất và thời gian tải trang của ứng dụng.
  
- Khó khăn trong việc gỡ lỗi:

    Việc gỡ lỗi các ứng dụng JHipster có thể khó khăn hơn do cấu trúc phức tạp và sự phụ thuộc vào các thư viện bên ngoài.
  
    Việc thiếu tài liệu chi tiết về cách thức hoạt động của JHipster có thể khiến việc gỡ lỗi trở nên khó khăn hơn.
  
- Không phù hợp cho tất cả các dự án:

    JHipster là một framework mạnh mẽ, nhưng nó không phù hợp cho tất cả các dự án.
  
    Nếu dự án của bạn có yêu cầu đặc biệt hoặc cần sự tùy chỉnh cao, JHipster có thể không phải là lựa chọn tốt nhất.
  
- Ngoài ra, một số nhược điểm khác của JHipster bao gồm:

    Thiếu hỗ trợ cho các ngôn ngữ lập trình khác ngoài Java: JHipster chỉ hỗ trợ Java, vì vậy nó không phù hợp cho các dự án sử dụng các ngôn ngữ khác như Python hoặc JavaScript.
  
    Thiếu hỗ trợ cho các cơ sở dữ liệu khác ngoài MySQL: JHipster chỉ hỗ trợ MySQL, vì vậy nó không phù hợp cho các dự án sử dụng các cơ sở dữ liệu khác như PostgreSQL hoặc MongoDB.
  
## Kết luận

JHipster là một framework mạnh mẽ có thể giúp bạn tạo ra các ứng dụng web Java/Spring Boot đầy đủ chức năng một cách nhanh chóng và dễ dàng. Tuy nhiên, nó cũng có một số nhược điểm cần cân nhắc trước khi sử dụng.

## Lời khuyên
JHipster là một lựa chọn tốt cho các dự án web Java/Spring Boot cần được phát triển nhanh chóng và có cấu trúc tương đối đơn giản.

Nếu dự án của bạn có yêu cầu đặc biệt hoặc cần sự tùy chỉnh cao, bạn nên cân nhắc sử dụng một framework khác hoặc viết ứng dụng tay.

Trước khi sử dụng JHipster, hãy đảm bảo rằng bạn đã hiểu rõ các nhược điểm của nó và có kế hoạch giải quyết các vấn đề tiềm ẩn.


