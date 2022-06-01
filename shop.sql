CREATE DATABASE shop
GO
USE shop
SET DATEFORMAT DMY
GO


CREATE SEQUENCE [dbo].[hibernate_sequence] 
 AS [bigint]
 START WITH 10000000
 INCREMENT BY 1
 MINVALUE -9223372036854775808
 MAXVALUE 9223372036854775807
 CACHE 
 go

create table Role
(
    [id] [int] IDENTITY(1,1) NOT NULL,
    [role_name] [int] NOT NULL,
    PRIMARY KEY ([id])
)
--dữ liệu bảng Privilege
create table Privilege
(
    id int IDENTITY(1,1) PRIMARY KEY,
    ID_Role int NOT NULL FOREIGN KEY REFERENCES Role ([id]),
    Name_Privilege nvarchar(50) not null,
)
CREATE TABLE ACCOUNT
(
    ID_ACCOUNT int IDENTITY(1,1) PRIMARY KEY,
    --Admin là ad ,student là st,professor là pr
    email nvarchar(50) NOT NULL,
    password_hash nvarchar(255) NOT NULL,
    provider varchar(255) NOT NULL,
    provider_id varchar(255),
    [created] [datetime2](7) ,
    [updated] [datetime2](7) ,
    [last_expires] [datetime2](7) ,
    [accept_terms] [bit]
)
CREATE TABLE ACCOUNT_Has_Role
(
    ID_ACCOUNT int NOT NULL FOREIGN KEY REFERENCES ACCOUNT (ID_ACCOUNT) ,
    [id] int NOT NULL FOREIGN KEY REFERENCES Role ([id]),
    PRIMARY KEY (ID_ACCOUNT,[id])
)
CREATE TABLE Refresh_Token
(
    [id] [int] IDENTITY(1,1) NOT NULL,
    [token] [nvarchar](max) NULL,
    [expires] [datetime2](7) NOT NULL,
    [created] [datetime2](7) NOT NULL,
    [created_by_ip] [nvarchar](max) NULL,
    [revoked] [datetime2](7) NULL,
    [revoked_by_ip] [nvarchar](max) NULL,
    [replaced_by_token] [nvarchar](max) NULL,
    [reason_revoked] [nvarchar](max) NULL,
    ID_ACCOUNT int NOT NULL FOREIGN KEY REFERENCES ACCOUNT (ID_ACCOUNT) ,
    PRIMARY KEY ([id])
)
CREATE TABLE Verification_Token
(
    ID_ACCOUNT int NOT NULL FOREIGN KEY REFERENCES ACCOUNT (ID_ACCOUNT) ,
    [verification_token_content] [nvarchar](max) NULL,
    [verified] [datetime2](7) NULL,
    PRIMARY KEY (ID_ACCOUNT)
)
CREATE TABLE Reset_Token
(
    ID_ACCOUNT int NOT NULL FOREIGN KEY REFERENCES ACCOUNT (ID_ACCOUNT) ,
    [reset_token_content] [nvarchar](max) NULL,
    [reset_token_expires] [datetime2](7) NULL,
    [password_reset] [datetime2](7) NULL,
    PRIMARY KEY (ID_ACCOUNT)
)
CREATE TABLE Customer
(
    id_customer int FOREIGN KEY REFERENCES ACCOUNT (ID_ACCOUNT) ,
    name nvarchar(max) ,
    phone_number varchar(15),
    gender CHAR(1),
    birthday date,
    img_url VARCHAR(MAX),
    address nvarchar(max),
    PRIMARY KEY (id_customer)
)
CREATE TABLE Shop
(
    id_shop int FOREIGN KEY REFERENCES ACCOUNT (ID_ACCOUNT) ,
    name nvarchar(max) ,
    phone_number varchar(15),
    img_url VARCHAR(MAX),
    address nvarchar(max),
    description nvarchar(max),
    PRIMARY KEY (id_shop)
)
CREATE TABLE Shop_Category
(
    id_shop_category int IDENTITY(1,1) ,
    id_shop int FOREIGN KEY REFERENCES Shop (id_shop),
    name nvarchar(max),
    PRIMARY KEY (id_shop_category)
)

CREATE TABLE Category
(
    id_category int IDENTITY(1,1) ,
    id_category_parent int ,
    name nvarchar(max),
    PRIMARY KEY (id_category)
)

CREATE TABLE Single_Product_Page
(
    id_single_product_page int IDENTITY(1,1) ,
    id_shop int FOREIGN KEY REFERENCES Shop (id_shop),
    id_category int FOREIGN KEY REFERENCES Category (id_category),
    id_shop_category int FOREIGN KEY REFERENCES Shop_Category (id_shop_category),
    name nvarchar(max),
    description nvarchar(max),
    PRIMARY KEY (id_single_product_page)
)
CREATE TABLE Product
(
    id_product int IDENTITY(1,1) ,
    id_single_product_page int FOREIGN KEY REFERENCES Single_Product_Page (id_single_product_page),
    name nvarchar(max),
    quantity int,
    sold_count int,
    price money,
    img_url VARCHAR(MAX),
    PRIMARY KEY (id_product)
)
CREATE TABLE Evaluate
(
    id_evaluate int IDENTITY(1,1) ,
    id_product int FOREIGN KEY REFERENCES Product (id_product),
    id_customer int FOREIGN KEY REFERENCES Customer (id_customer),
    date_create datetime,
    date_update datetime,
    like_count int ,
    rate_star tinyint ,
    content nvarchar(max),
    PRIMARY KEY (id_evaluate)
)
CREATE TABLE Evaluate_Reply 
(
    id_evaluate_reply int IDENTITY(1,1) ,
    id_evaluate int FOREIGN KEY REFERENCES Evaluate (id_evaluate),
    id_shop int FOREIGN KEY REFERENCES Shop (id_shop),
    date_create datetime,
    date_update datetime,
    content nvarchar(max),
    PRIMARY KEY (id_evaluate_reply)
)
CREATE TABLE Cart_Item
(
    id_customer int FOREIGN KEY REFERENCES Customer (id_customer),
    id_product int FOREIGN KEY REFERENCES Product (id_product),
    quantity int,
    PRIMARY KEY (id_customer,id_product)
)
CREATE TABLE Order_Item
(
    id_order_item int IDENTITY(1,1) ,
    id_customer int FOREIGN KEY REFERENCES Customer (id_customer),
    id_product int FOREIGN KEY REFERENCES Product (id_product),
    status tinyint,
    PRIMARY KEY (id_order_item)
)
CREATE TABLE Wallet_Shop
(
    id_shop int FOREIGN KEY REFERENCES Shop (id_shop),
    total money,
    PRIMARY KEY (id_shop)
)
CREATE TABLE Wallet_Customer
(
    id_customer int FOREIGN KEY REFERENCES Customer (id_customer),
    total money,
    PRIMARY KEY (id_customer)
)
CREATE TABLE Sale
(
    id_sale int IDENTITY(1,1) ,
    sale_condition varchar(50) ,
    discount_kind varchar(50) ,
    discount_condition varchar(50),
    discount_value money,
    PRIMARY KEY (id_sale)
)
CREATE TABLE Voucher
(
    id_voucher int IDENTITY(1,1) ,
    id_sale int FOREIGN KEY REFERENCES Sale (id_sale),
    name nvarchar(max),
    code VARCHAR(MAX),
    quantity_left int,
    date_start DATETIME,
    date_end DATETIME,
    PRIMARY KEY (id_voucher)
)
CREATE TABLE Promote
(
    id_promote int IDENTITY(1,1) ,
    id_sale int FOREIGN KEY REFERENCES Sale (id_sale),
    name nvarchar(max),
    date_start DATETIME,
    date_end DATETIME,
    PRIMARY KEY (id_promote)
)
CREATE TABLE Promote_Product_List
(
    id_promote int FOREIGN KEY REFERENCES Promote (id_promote),
    id_product int FOREIGN KEY REFERENCES Product (id_product),
    PRIMARY KEY (id_promote,id_product)
)
CREATE TABLE Chat
(
    id_account int FOREIGN KEY REFERENCES Account (id_account),
    is_account_shop BIT,
    id_account_reply int FOREIGN KEY REFERENCES Account (id_account),
    is_account_reply_shop BIT,
    PRIMARY KEY (id_account,id_account_reply)
)
CREATE TABLE Chat_Line
(
    id_chat_line int IDENTITY(1,1) ,
    id_account int ,
    id_account_reply int,
    id_product int FOREIGN KEY REFERENCES Product (id_product),
    date_create datetime,
    date_update datetime,
    content nvarchar(max),
    PRIMARY KEY (id_chat_line)
)

-- CONSTRAINT
ALTER TABLE Chat_Line
  ADD CONSTRAINT FK_Chat_Chat_Line
  FOREIGN KEY(id_account, id_account_reply) REFERENCES Chat(id_account, id_account_reply)


-- TRIGGER

-- FUNCTION
INSERT INTO Role VALUES (0)
INSERT INTO Role VALUES (1)
	
--INSERT INTO ACCOUNT Values(N'sa@gmail.com',N'$2a$10$g/AIRfhpFhGPjAnUw5m8qu974.uI71HwrBpjXeYQu4khl8KI.4VgS','','',getdate(),null,null,1)
select * from ACCOUNT
select * from Reset_Token
select * from Verification_Token
select * from refresh_token
delete from Reset_Token
delete from Verification_Token
delete from refresh_token
delete from ACCOUNT_Has_Role
delete from ACCOUNT
select * from ACCOUNT_Has_Role
INSERT INTO ACCOUNT Values(1,getdate(),N'sa@gmail.com',null,N'$2a$10$g/AIRfhpFhGPjAnUw5m8qu974.uI71HwrBpjXeYQu4khl8KI.4VgS','local',null,null);
INSERT INTO ACCOUNT_has_role VALUES (1,2) ;
INSERT INTO Verification_Token VALUES (1,null,getdate())
    -- Customer
--INSERT INTO Customer VALUES(1,N'Lê Đình Phùng','0378876395','m','25/08/2000','','334/35/12 Nguyễn Văn Nghi F7 Gò Vấp');
INSERT INTO Customer VALUES(1,'334/35/12 Nguyễn Văn Nghi F7 Gò Vấp','25/08/2000','m','',N'Lê Đình Phùng','0378876395')
    -- Shop
--INSERT INTO Shop VALUES(1,N'shop của Phùng','0378876395',N'','334/35/12 Nguyễn Văn Nghi F7 Gò Vấp',N'Shop ác nhất hành tinh');
select * from Shop
INSERT INTO Shop VALUES(1,N'334/35/12 Nguyễn Văn Nghi F7 Gò Vấp',N'Shop ác nhất hành tinh','',N'shop của Phùng','0378876395');
    -- Shop_Category
	Select * from shop_category
INSERT INTO Shop_Category VALUES(2,1,N'Điện Thoại');
INSERT INTO Shop_Category VALUES(1,1,N'Áo Dú');
INSERT INTO Shop_Category VALUES(1,N'Quần Xì');
    -- Category
        -- Level 1 (1 - 30)
INSERT INTO Category VALUES(0,N'Thời Trang Nữ');
INSERT INTO Category VALUES(0,N'Thời Trang Nam');
INSERT INTO Category VALUES(0,N'Sắc Đẹp');
INSERT INTO Category VALUES(0,N'Sức Khỏe');
INSERT INTO Category VALUES(0,N'Phụ Kiện Thời Trang');
INSERT INTO Category VALUES(0,N'Thiết Bị Điện Gia Dụng');
INSERT INTO Category VALUES(0,N'Giày Dép Nam');
INSERT INTO Category VALUES(0,N'Điện Thoại &amp; Phụ Kiện');
INSERT INTO Category VALUES(0,N'Du lịch &amp; Hành lý');
INSERT INTO Category VALUES(0,N'Túi Ví Nữ');
INSERT INTO Category VALUES(0,N'Giày Dép Nữ');
INSERT INTO Category VALUES(0,N'Túi Ví Nam');
INSERT INTO Category VALUES(0,N'Đồng Hồ');
INSERT INTO Category VALUES(0,N'Thiết Bị Âm Thanh');
INSERT INTO Category VALUES(0,N'Thực phẩm và đồ uống');
INSERT INTO Category VALUES(0,N'Chăm Sóc Thú Cưng');
INSERT INTO Category VALUES(0,N'Mẹ &amp; Bé');
INSERT INTO Category VALUES(0,N'Thời trang trẻ em &amp; trẻ sơ sinh');
INSERT INTO Category VALUES(0,N'Gaming &amp; Console');
INSERT INTO Category VALUES(0,N'Cameras &amp; Flycam');
INSERT INTO Category VALUES(0,N'Nhà cửa &amp; Đời sống');
INSERT INTO Category VALUES(0,N'Thể Thao &amp; Dã Ngoại');
INSERT INTO Category VALUES(0,N'Văn Phòng Phẩm');
INSERT INTO Category VALUES(0,N'Sở thích &amp; Sưu tầm');
INSERT INTO Category VALUES(0,N'Ô tô');
INSERT INTO Category VALUES(0,N'Mô tô, xe máy');
INSERT INTO Category VALUES(0,N'Voucher &amp; Dịch vụ');
INSERT INTO Category VALUES(0,N'Sách &amp; Tạp Chí');
INSERT INTO Category VALUES(0,N'Máy tính &amp; Laptop');
INSERT INTO Category VALUES(0,N'Deal Gần bạn');

        -- Level 2
            -- Thời Trang Nữ (31 - 51)
INSERT INTO Category VALUES(1,N'Áo');
INSERT INTO Category VALUES(1,N'Quần');
INSERT INTO Category VALUES(1,N'Quần đùi');
INSERT INTO Category VALUES(1,N'Váy');
INSERT INTO Category VALUES(1,N'Quần jeans');
INSERT INTO Category VALUES(1,N'Đầm');
INSERT INTO Category VALUES(1,N'Váy cưới');
INSERT INTO Category VALUES(1,N'Đồ liền thân');
INSERT INTO Category VALUES(1,N'Áo khoác');
INSERT INTO Category VALUES(1,N'Áo len');
INSERT INTO Category VALUES(1,N'Hoodie và Áo nỉ');
INSERT INTO Category VALUES(1,N'Bộ');
INSERT INTO Category VALUES(1,N'Đồ lót');
INSERT INTO Category VALUES(1,N'Đồ ngủ');
INSERT INTO Category VALUES(1,N'Đồ Bầu');
INSERT INTO Category VALUES(1,N'Đồ truyền thống');
INSERT INTO Category VALUES(1,N'Đồ hóa trang');
INSERT INTO Category VALUES(1,N'Khác');
INSERT INTO Category VALUES(1,N'Vải');
INSERT INTO Category VALUES(1,N'Vớ/ Tất');

        -- Level 3
            -- Áo (52 - 59)
INSERT INTO Category VALUES(31,N'Áo hai dây và ba lỗ');
INSERT INTO Category VALUES(31,N'Áo ống');
INSERT INTO Category VALUES(31,N'Áo thun');
INSERT INTO Category VALUES(31,N'Áo sơ mi');
INSERT INTO Category VALUES(31,N'Áo polo');
INSERT INTO Category VALUES(31,N'Áo liền thân');
INSERT INTO Category VALUES(31,N'Khác');