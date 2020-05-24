# 基本设置

开发环境搭建, 主要为 Windows or Mac

## 安装 Flutter 到 Windows

### 配置用户环境变量

由于在国内访问Flutter有时可能会受到限制，Flutter官方为中国开发者搭建了临时镜像，大家可以将如下环境变量加入到用户环境变量中：

```shell
export PUB_HOSTED_URL=https://pub.flutter-io.cn
export FLUTTER_STORAGE_BASE_URL=https://storage.flutter-io.cn
```

::: tip 提示
此镜像为临时镜像，并不能保证一直可用，你也可以参考https://flutter.io/community/china 以获得有关镜像服务器的最新动态。
:::

### 系统要求

要安装并运行Flutter，您的开发环境必须满足以下最低要求:

- 操作系统: Windows 7 或更高版本 (64-bit)
- 磁盘空间: 400 MB (不包括Android Studio的磁盘空间).
- 工具: Flutter 依赖下面这些命令行工具.
  - PowerShell 5.0 或更新的版本；
  - Git for Windows (Git命令行工具)；
  如果已安装Git for Windows，请确保可以在命令提示符或PowerShell中运行 git 命令。

### 获取 Flutter SDK

[官网下载地址](https://flutter.dev/docs/development/tools/sdk/releases)

<picture>
  <source srcset="/flutter-download-sdk.png" media="(min-width: 719px)">
  <img class="flutter-download-sdk" alt="Image">
</picture>

<style>
  @media screen and (max-width:  719px) {
    .flutter-download-sdk {
       display: none;
    }
  }
</style>

注意，Flutter的渠道版本会不停变动，请以Flutter官网为准。另外，在中国大陆地区，要想正常获取安装包列表或下载安装包，可能需要翻墙，读者也可以去Flutter github项目下去下载安装包，地址：[https://github.com/flutter/flutter/releases](https://github.com/flutter/flutter/releases) 。

- 将安装包zip解压到你想安装Flutter SDK的路径（如：C:\src\flutter；注意，不要将flutter安装到需要一些高权限的路径如C:\Program Files\）。

- 在Flutter安装目录的flutter文件下找到flutter_console.bat，双击运行并启动flutter命令行，接下来，你就可以在Flutter命令行运行flutter命令了。

### 运行 flutter doctor 命令

在Flutter命令行运行如下命令来查看是否还需要安装其它依赖，如果需要，安装它们：

```shell
PS user> flutter doctor
```

执行后，如遇以下错误（Flutter 要求 SDK 必须为 Clone 版本）

```shell

PS user> flutter doctor
Error: The Flutter directory is not a clone of the GitHub project.
       The flutter tool requires Git in order to operate properly;
       to set up Flutter, run the following command:
       git clone -b stable https://github.com/flutter/flutter.git
```

解决：删除原安装包，在当前安装目录执行如下命令，重新下载：

[致谢: https://blog.csdn.net/u014764233/article/details/96484215](https://blog.csdn.net/u014764233/article/details/96484215)

```shell
git clone -b stable https://github.com/flutter/flutter.git
```

注：国内 Clone 太慢了 [致谢: https://blog.csdn.net/weixin_30521161/article/details/95491097](https://blog.csdn.net/weixin_30521161/article/details/95491097)

以下是 Clone 过程

<picture>
  <source srcset="/flutter-doctor-1.png" media="(min-width: 719px)">
  <img class="flutter-doctor" alt="Image">
</picture>

<picture>
  <source srcset="/flutter-doctor-2.png" media="(min-width: 719px)">
  <img class="flutter-doctor" alt="Image">
</picture>

<style>
  @media screen and (max-width:  719px) {
    .flutter-doctor {
       display: none;
    }
  }
</style>

我这里提示，未安装 Flutter plugin and Dart plugin 需要安装下

```shell
X Flutter plugin not installed; this adds Flutter specific functionality.
X Dart plugin not installed; this adds Dart specific functionality.
```

1、在 Android Studio 中搜索 Flutter、Dart;

  Configure -> Plugins -> 搜索 Flutter and Dart

2、可能遇到 AS3.5 以上版本搜索不到指定插件的问题；

搜了无数办法，取消安全链接，取消代理等等，3.5版本解决不了，最后终于找到
，打开android studio 的安装路径下的bin 文件找到 idea.properties 并打开 idea.properties

将第18行（默认注释状态，取消注释）

```xml
idea.plugins.path=${idea.config.path}/plugins
```

改成

```xml
idea.plugins.path=${idea.system.path}/plugins
```

3、安装 Flutter and Dart;

4、安装完成，验证提示如下则成功

```shell
PS user>  flutter doctor
Doctor summary (to see all details, run flutter doctor -v):
[√] Flutter (Channel stable, v1.17.1, on Microsoft Windows [Version 10.0.18363.836], locale zh-CN)

[!] Android toolchain - develop for Android devices (Android SDK version 29.0.2)
    ! Some Android licenses not accepted.  To resolve this, run: flutter doctor --android-licenses
[√] Android Studio (version 3.5)
[!] Connected device
    ! No devices available

! Doctor found issues in 2 categories.
```

5、重新启动 As

### 创建 Flutter App

- file -> New Flutter Project

<picture>
  <source srcset="/create-app-1.png" media="(min-width: 719px)">
  <img class="create-app" alt="Image">
</picture>
<picture>
  <source srcset="/create-app-2.jpg" media="(min-width: 719px)">
  <img class="create-app" alt="Image">
</picture>
<picture>
  <source srcset="/create-app-3.png" media="(min-width: 719px)">
  <img class="create-app" alt="Image">
</picture>

<style>
  @media screen and (max-width:  719px) {
    .create-app {
       display: none;
    }
  }
</style>

- Run

遇到 'Running Gradle task 'assembleDebug' 慢的问题，修改如下：

1、打开文件 android -> build.gradle

```xml
buildscript {
  repositories {
        maven { url "https://maven.google.com" }
        maven{ url'http://maven.aliyun.com/nexus/content/groups/public/'}
        jcenter()
        google()
    }
}

allprojects {
    repositories {
        maven { url "https://maven.google.com" }
        maven{ url'http://maven.aliyun.com/nexus/content/groups/public/'}
        jcenter()
        mavenCentral()
        google()
    }
}
```

2、修改Flutter的配置文件, 该文件在`Flutter安装目录/packages/flutter_tools/gradle/flutter.gradle

```xml
buildscript {
  repositories {
        maven { url "https://maven.google.com" }
        maven{ url'http://maven.aliyun.com/nexus/content/groups/public/'}
        jcenter()
        google()
    }
}
```
