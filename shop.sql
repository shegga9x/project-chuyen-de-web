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
CREATE TABLE ACCOUNT_Detail
(
    ID_ACCOUNT int NOT NULL FOREIGN KEY REFERENCES ACCOUNT (ID_ACCOUNT) ,
    first_name nvarchar(max) ,
    last_name nvarchar(max) ,
	imageUrl nvarchar(max),
    address nvarchar(50)  ,
    phone_number varchar(10) ,
    birthday smalldatetime ,
    PRIMARY KEY (ID_ACCOUNT)
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



select * from ACCOUNT
select * from Verification_Token
select * from role
select * from ACCOUNT_Detail



--insert into ACCOUNT  values ('shegga9x@gmail.com','123456',null ,null,null ,1)
--insert into ACCOUNT_Detail  values ( 1,null ,null,null ,null,null)

