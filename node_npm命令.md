# ���-day01
## ��ʶNodejs
- JavaScript��ʲô�� 
- JavaScript������������� 

![](img/1.png)

����� | �ں�    
-------|---------
IE     | Trident 
FireFox| Gecko   
Chrome | WebKit  
Safari | WebKit  
Opera  | Presto  
Edge   | Chakra  

## Node.js�ĵ���
![image](img/2.png)

- ����Ryan Dahl ��������
    + 2004 ŦԼ ����ѧ��ʿ 
    + 2006 ��ѧ������ ת�򿪷� 
    + 2009.5��������node��Ŀ�����js��ᷢ���ݽ� 
    + 2010 ����Joyent�Ƽ��㹫˾ 
    + 2012 �˾�Ļ��

> Node.js ��һ�ֽ�����Google Chrome��s v8 engine�ϵ� non-blocking (��������, event-driven �������¼��ģ� I/Oƽ̨. 
Node.jsƽ̨ʹ�õĿ���������JavaScript��ƽ̨�ṩ�˲���ϵͳ�Ͳ��API���������������˱�̣���������ļ����������̲�����ͨ�Ų�����ϵͳģ��

## Node.js����������ʲô��

- ���и����߼��Ķ�̬��վ 
- WebSocket������ 
- �����й��� 
- ����ͼ�ν���ı���Ӧ�ó��� 
- ......

## �ն˻���ʹ��
### ��Ӧ��
- notepad �򿪼��±�
- mspaint �򿪻�ͼ
- calc �򿪼����
- write д�ְ�
- sysdm.cpl �򿪻����������ô���
### ��������
- md ����Ŀ¼
- rmdir(rd) ɾ��Ŀ¼��Ŀ¼��û���ĵ���
- echo on a.txt �������ļ�
- del ɾ���ļ�
- rm �ļ��� ɾ���ļ�
- cat �ļ��� �鿴�ļ�����
- cat > �ļ��� ���ļ���д�����ݡ�

## Node.js��������׼��

1. ��ͨ��װ��ʽ[�ٷ���վ](https://nodejs.org/zh-cn/)

2. ��汾��װ��ʽ
    - ж�����е�Node.js
    - ����[nvm](https://github.com/coreybutler/nvm-windows)
    - ��C�̴���Ŀ¼dev
    - ��devĿ���д���������Ŀ¼nvm��nodejs
    - ���Ұ�nvm����ѹ��ȥnvmĿ¼��
    - ��install.cmd�ļ������Ҽ�ѡ���Թ���Ա������С�
    - �򿪵�cmd����ֱ�ӻس�������һ��settings.txt�ļ����޸��ļ���������Ϣ
    - ����nvm��Node.js��������
        + NVM_HOME:C:\dev\nvm
        + NVM_SYMLINK:C:\dev\nodejs
    - �����úõ��������������ӵ�Path��
## nvm���õ�����
- nvm list �鿴��ǰ��װ��Node.js���а汾
- nvm install �汾�� ��װָ���汾��Node.js
- nvm uninstall �汾�� ж��ָ���汾��Node.js
- nvm use �汾�� ѡ��ָ���汾��Node.js

## Node.js֮HelloWorld
- �����з�ʽREPL
- �����ļ���ʽ
- ȫ�ֶ������

## ��������ģ�黯
- ��������ģ�黯�淶CommonJS��ʵ��Node.js
- ģ�鵼��������
- ģ�鵼�����Ʒ���
- ģ����ع���
    + ģ����� ������չ����ʱ��ᰴ�����º�׺˳����в��� .js .json .node
- ģ�����
    + �Զ���ģ��
    + ϵͳ����ģ��
        * fs �ļ�����
        * http �������
        * path ·������
        * querystring ��ѯ��������
        * url url����
        * ......

## ES6�����﷨
- ��������let��const
- �����Ľ⹹��ֵ
    + ����⹹��ֵ
    + ����⹹��ֵ
    + �ַ����⹹��ֵ
- �ַ�����չ
    + includes()
    + startsWith()
    + endsWith()
    + ģ���ַ���
- ������չ
    + ����Ĭ��ֵ
    + �����ṹ��ֵ
    + rest����
    + ��չ�����
    + ��ͷ����
- ����̳�
### NPM ��node.js package management��
> ȫ������ģ����̬ϵͳ���������е�ģ�鶼�ǿ�Դ��ѵģ�Ҳ��Node.js�İ������ߡ�

- [�ٷ���վ](https://www.npmjs.com/ )

### npm����װ��ʽ
- ���ذ�װ
- ȫ�ְ�װ

### ���npm��װ����ǽ������
- --registry
    + npm config set registry=https//registry.npm.taobao.org 
- cnpm
    + �Ա�NPM����,��ٷ�NPM��ͬ��Ƶ��ĿǰΪ10����һ�� 
    + ����: http://npm.taobao.org/ 
    + npm install -g cnpm �Cregistry=https//registry.npm.taobao.org 
    + ʹ��cnpm��װ��: cnpm install ����
- nrm
    + ���ã��޸ľ���Դ 
    + ��Ŀ��ַ��https://www.npmjs.com/package/nrm 
    + ��װ��npm install -g nrm

### npm��������
- ��װ��
- ���°�
- ж�ذ�

### yarn����ʹ��
- ���npm����ʹ��

## �Զ����
### ���Ĺ淶
- package.json�����ڰ��Ķ���Ŀ¼��
- �������ļ�Ӧ����binĿ¼��
- JavaScript����Ӧ����libĿ¼��
- �ĵ�Ӧ����docĿ¼��
- ��Ԫ����Ӧ����testĿ¼��

### package.json�ֶη���
- name���������ƣ�������Ψһ�ģ���СдӢ����ĸ�����ֺ��»�����ɣ����ܰ����ո�
- description�����ļ�Ҫ˵��
- version���������廯�汾ʶ��淶�İ汾�ַ���
- keywords���ؼ������飬ͨ����������
- maintainers��ά�������飬ÿ��Ԫ��Ҫ����name��email����ѡ����web����ѡ���ֶ�
- contributors�����������飬��ʽ��maintainers��ͬ����������Ӧ���ǹ���������ĵ�һ- ��Ԫ��
- bugs���ύbug�ĵ�ַ����������վ���ߵ����ʼ���ַ
- licenses�����֤���飬ÿ��Ԫ��Ҫ����type�����֤���ƣ���url�����ӵ����֤�ı���- ��ַ���ֶ�
- repositories���ֿ��йܵ�ַ���飬ÿ��Ԫ��Ҫ����type���ֿ����ͣ���git����url����- ��ĵ�ַ����path������ڲֿ��·������ѡ���ֶ�
- dependencies��������������������һ���������飬�ɰ������ƺͰ汾�����
- devDependencies��������������������һ���������飬�ɰ������ƺͰ汾�����

### �Զ��������

