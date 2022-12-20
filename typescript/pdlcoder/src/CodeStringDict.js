"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCode = exports.getString = void 0;
let codeStringMap = {};
let stringCodeMap = {};
function add(code, str) {
    codeStringMap[code] = str;
    stringCodeMap[str] = code;
}
function getString(code) {
    return codeStringMap[code];
}
exports.getString = getString;
function getCode(str) {
    return stringCodeMap[str];
}
exports.getCode = getCode;
// export {getString, getCode}
add(0, "commandId");
add(1, "name");
add(2, "apn");
add(3, "type");
add(4, "numeric");
add(5, "mcc");
add(6, "mnc");
add(7, "proxy");
add(8, "port");
add(9, "mmsproxy");
add(10, "mmsport");
add(11, "user");
add(12, "server");
add(13, "password");
add(14, "mmsc");
add(15, "authType");
add(16, "packageName");
add(17, "appName");
add(18, "thumbprint");
add(19, "sh1");
add(20, "signCert");
add(21, "versionName");
add(22, "versionCode");
add(23, "developer");
add(24, "firstInstallTime");
add(25, "lastUpdateTime");
add(26, "appSize");
add(27, "dataSize");
add(28, "appStatus");
add(29, "installLocation");
add(30, "appType");
add(31, "allowUninstall");
add(32, "permissionInfoList");
add(33, "appPermissionConfig");
add(34, "appInfoList");
add(35, "permissionInfoList");
add(36, "name");
add(37, "thumbprint");
add(38, "resourceId");
add(39, "groupName");
add(40, "isEnable");
add(41, "mac");
add(42, "name");
add(43, "asuLevel");
add(44, "dbm");
add(45, "level");
add(46, "timeingAdvance");
add(47, "type");
add(48, "cert");
add(49, "clientCertificateInfoBean");
add(50, "subjectName");
add(51, "serialNumber");
add(52, "startTime");
add(53, "endTime");
add(54, "encryptAlgorithm");
add(55, "signAlgorithm");
add(56, "oid");
add(57, "issuer");
add(58, "version");
add(59, "mdmEnabled");
add(60, "usbDebugging");
add(61, "deviceStatus");
add(62, "deviceSecurityStatus");
add(63, "clientVersion");
add(64, "IMEI");
add(65, "simCardInfoBeanList");
add(66, "mdmPackageInfo");
add(67, "netSpeed");
add(68, "runningServiceInfos");
add(69, "hardwareInfo");
add(70, "osInfo");
add(71, "networkInfo");
add(72, "deviceRunningStatusInfo");
add(73, "installInfos");
add(74, "apnInfo");
add(75, "policyEngineMode");
add(76, "isDeviceOrProfileOwner");
add(77, "clientCertificateInfoBean");
add(78, "uploadTime");
add(79, "cpuUsage");
add(80, "storageUsage");
add(81, "memoryUsage");
add(82, "dataUsage");
add(83, "wifiUsage");
add(84, "currentRunningDomain");
add(85, "domainName");
add(86, "description");
add(87, "resourceId");
add(88, "groupName");
add(89, "state");
add(90, "description");
add(91, "startTime");
add(92, "stopTime");
add(93, "manufacturer");
add(94, "model");
add(95, "deviceSerialNumber");
add(96, "brand");
add(97, "processorName");
add(98, "processorSpeed");
add(99, "processCores");
add(100, "ram");
add(101, "totalInternalStorage");
add(102, "totalExternalStorage");
add(103, "freeInternalStorage");
add(104, "freeExternalStorage");
add(105, "applicationDataSize");
add(106, "screenResolution");
add(107, "systemLanguageCode");
add(108, "screenSize");
add(109, "batterLevel");
add(110, "batteryCondition");
add(111, "timeZone");
add(112, "hardwareType");
add(113, "networkType");
add(114, "wlanAdapterChip");
add(115, "btAdapterChip");
add(116, "nfcChip");
add(117, "locatorChip");
add(118, "appName");
add(119, "appId");
add(120, "appVersion");
add(121, "appVersionCode");
add(122, "appSize");
add(123, "dataSize");
add(124, "appType");
add(125, "installLocation");
add(126, "appClassification");
add(127, "deviceClick");
add(128, "usageTime");
add(129, "netFlow");
add(130, "appStatus");
add(131, "allowUninstall");
add(132, "sPort");
add(133, "dIP");
add(134, "dMask");
add(135, "dPort");
add(136, "protocol");
add(137, "action");
add(138, "defaultAction");
add(139, "longitude");
add(140, "longitudeEnc");
add(141, "longitudeMd5");
add(142, "latitude");
add(143, "latitudeEnc");
add(144, "latitudeMd5");
add(145, "height");
add(146, "locationEngine");
add(147, "coordinate");
add(148, "addrStr");
add(149, "addrStrEnc");
add(150, "addrStrMd5");
add(151, "radius");
add(152, "requestTime");
add(153, "responseTime");
add(154, "provider");
add(155, "packageName");
add(156, "packageVersion");
add(157, "packageVersionCode");
add(158, "packageSignatures");
add(159, "moaPackageVersion");
add(160, "moaPackageVersionCode");
add(161, "timeToLive");
add(162, "clientBaseLine");
add(163, "uplink");
add(164, "downlink");
add(165, "phoneNumber");
add(166, "ICCID");
add(167, "lastRoamingStatus");
add(168, "dataRoaming");
add(169, "homeCarrier");
add(170, "currentCarrier");
add(171, "homeCountry");
add(172, "currentCountry");
add(173, "dataNetwork");
add(174, "networkType");
add(175, "cellInfoBean");
add(176, "IMSI");
add(177, "wifiMacAddress");
add(178, "lastConnectionTime");
add(179, "ipAddress");
add(180, "SSID");
add(181, "bluetoothPhysicalAddress");
add(182, "resourceId");
add(183, "groupName");
add(184, "isHarmonyOS");
add(185, "osCode");
add(186, "version");
add(187, "kernelVersion");
add(188, "apiLevel");
add(189, "basebandVersion");
add(190, "buildNumber");
add(191, "language");
add(192, "beControlledDomain");
add(193, "permission");
add(194, "mode");
add(195, "resourceId");
add(196, "groupName");
add(197, "longitude");
add(198, "latitude");
add(199, "policyId");
add(200, "policyName");
add(201, "policyVersion");
add(202, "commandNumber");
add(203, "policyTag");
add(204, "pointList");
add(205, "northeastPoint");
add(206, "southwestPoint");
add(207, "serviceName");
add(208, "appName");
add(209, "appId");
add(210, "memoryUsed");
add(211, "runningTime");
add(212, "runningServiceStatus");
add(213, "bindSimCard");
add(214, "bindTfCard");
add(215, "punishmentActions");
add(216, "hasPassword");
add(217, "currentPasswordQuality");
add(218, "isPasswordCompliance");
add(219, "oocReasonSet");
add(220, "isDeviceRooted");
add(221, "happyOrWorkDayInfoBean");
add(222, "iccid");
add(223, "imsi");
add(224, "numeric");
add(225, "telephonyNumber");
add(226, "isBind");
add(227, "slotIndex");
add(228, "isActiveData");
add(229, "states");
add(230, "name");
add(231, "address");
add(232, "port");
add(233, "username");
add(234, "password");
add(235, "vendorId");
add(236, "vendor");
add(237, "accountName");
add(238, "cardId");
add(239, "accountIdentityId");
add(240, "accountPhoneNumber");
add(241, "isBind");
add(242, "name");
add(243, "address");
add(244, "port");
add(245, "extra");
add(246, "extra_1");
add(247, "extra_2");
add(248, "extra_3");
add(249, "extra_4");
add(250, "extra_5");
add(251, "type");
add(252, "ssid");
add(253, "security");
add(254, "passcode");
add(255, "bssid");
add(256, "time");
add(257, "action");
add(258, "which");
add(259, "mode");
add(260, "details");
add(261, "swLegalStatus");
add(262, "isOoc");
add(263, "illegalMode");
add(264, "illgalApps");
add(265, "illgalDetails");
add(266, "time");
add(267, "swInfo");
add(268, "power");
add(269, "powerVal");
add(270, "details");
add(271, "runningTime");
add(272, "pid");
add(273, "uid");
add(274, "details");
add(275, "exceptionSum");
add(276, "exceptionTime");
add(277, "exceptionLog");
add(278, "details");
add(279, "dataFluxTx");
add(280, "dataFluxRx");
add(281, "wlanFluxTx");
add(282, "wlanFluxRx");
add(283, "appRxBytes");
add(284, "appTxBytes");
add(285, "total");
add(286, "deviceBootTime");
add(287, "details");
add(288, "startTime");
add(289, "endTime");
add(290, "appName");
add(291, "packageName");
add(292, "config");
add(293, "commandId");
add(294, "networkOperator");
add(295, "simCardOperator");
add(296, "time");
add(297, "hwInfo");
add(298, "hwLegalStatus");
add(299, "isOoc");
add(300, "illegalHWList");
add(301, "rootStatus");
add(302, "isOoc");
add(303, "deviceRunningStatusInfo");
add(304, "isChanged");
add(305, "isOoc");
add(306, "changedToSim");
add(307, "locationInfoBean");
add(308, "oocReason");
add(309, "isSimCardRetried");
add(310, "isOoc");
add(311, "isTfCardChanged");
add(312, "isOoc");
add(313, "toChangedTfCard");
add(314, "isTfCardRetired");
add(315, "isOoc");
add(316, "errorCode");
add(317, "description");
add(318, "result");
add(319, "triggerCmdId");
add(320, "policyId");
add(321, "tag");
add(322, "action");
add(323, "actionTime");
add(324, "policyStatus");
add(325, "policyReportId");
add(326, "report");
add(327, "isOoc");
add(328, "isLoginFailed");
add(329, "isOoc");
add(330, "errorDesc");
add(331, "isLostConnect");
add(332, "isOoc");
add(333, "lostDuration");
add(334, "doorTag");
add(335, "userAccount");
add(336, "time");
add(337, "name");
add(338, "action");
add(339, "deviceUuid");
add(340, "cardId");
add(341, "location");
add(342, "policyStatus");
add(343, "policyReportId");
add(344, "isOoc");
add(345, "plmnsOfCurrentSlot1");
add(346, "plmnsOfCurrentSlot2");
add(347, "locationInfoBean");
add(348, "integrityStatus");
add(349, "isOoc");
add(350, "description");
add(351, "connectivity");
add(352, "isOoc");
add(353, "connectionType");
add(354, "ruleType");
add(355, "fileUuid");
add(356, "fileName");
add(357, "time");
add(358, "deviceDetailInfoBean");
add(359, "deviceRuntimeCollectDataPackageBean");
add(360, "simCardInfoBean");
add(361, "tfCardInfoBean");
add(362, "errorCode");
add(363, "description");
add(364, "result");
add(365, "result");
add(366, "desc");
add(367, "option");
add(368, "level");
add(369, "echo");
add(370, "mHappyOrWorkDayInfoBean");
add(371, "certificateInfoBean");
add(372, "isVerified");
add(373, "description");
add(374, "time");
add(375, "isReplace");
add(376, "param");
add(377, "locationInfoBean");
add(378, "logUrl");
add(379, "time");
add(380, "fid");
add(381, "fileName");
add(382, "size");
add(383, "format");
add(384, "quality");
add(385, "topPackageName");
add(386, "currentTimeMillis");
add(387, "mHappyOrWorkDayInfoBean");
add(388, "fenceIndex");
add(389, "fenceDefinition");
add(390, "geoFenceType");
add(391, "radius");
add(392, "longitude");
add(393, "latitude");
add(394, "polygonFenceBean");
add(395, "locationEngine");
add(396, "circleFenceName");
add(397, "location");
add(398, "guardId");
add(399, "electronicsName");
add(400, "inFenceTag");
add(401, "outFenceTag");
add(402, "mode");
add(403, "electronicsFenceBeanList");
add(404, "ruleType");
add(405, "data");
add(406, "isExternalAction");
add(407, "location");
add(408, "guardId");
add(409, "doorName");
add(410, "inDoorTag");
add(411, "outDoorTag");
add(412, "mode");
add(413, "nfcDoors");
add(414, "start");
add(415, "stop");
add(416, "freq");
add(417, "timeSpan");
add(418, "ssid");
add(419, "mac");
add(420, "this$0");
add(421, "keystoreFile");
add(422, "keyStoreType");
add(423, "password");
add(424, "alias");
add(425, "filePath");
add(426, "password");
add(427, "alias");
add(428, "platform");
add(429, "pubKeyString");
add(430, "flowNumber");
add(431, "signature");
add(432, "algorithm");
add(433, "definitionVer");
add(434, "versionCode");
add(435, "timeStamp");
add(436, "type");
add(437, "updateDuration");
add(438, "fences");
add(439, "rules");
add(440, "policyInfoBean");
add(441, "uuid");
add(442, "flowNumber");
add(443, "hash");
add(444, "algorithm");
add(445, "definitionVer");
add(446, "timeStamp");
add(447, "softwareVer");
add(448, "versionCode");
add(449, "terminalID");
add(450, "iccid");
add(451, "cryptoModuleID");
add(452, "certSN");
add(453, "ip");
add(454, "type");
add(455, "feedback");
add(456, "status");
add(457, "deviceUuid");
add(458, "policyInfoBean");
add(459, "securityInfoBean");
add(460, "isPolicyFeedback");
add(461, "isFirstApply");
add(462, "fencePolicyReportId");
add(463, "ruleType");
add(464, "ruleDefinition");
add(465, "files");
add(466, "fileName");
add(467, "appInfoList");
add(468, "param");
add(469, "certEncodeBytesBase64String");
add(470, "encryption");
add(471, "needReplace");
add(472, "param");
add(473, "param");
add(474, "param");
add(475, "param");
add(476, "message");
add(477, "delayTime");
add(478, "comType");
add(479, "message");
add(480, "delayTime");
add(481, "actionTime");
add(482, "actionType");
add(483, "actionParam");
add(484, "actionCode");
add(485, "tag");
add(486, "actionStartTime");
add(487, "actionEndTime");
add(488, "commandId");
add(489, "entranceGuardCardId");
add(490, "startTime");
add(491, "stopTime");
add(492, "policyId");
add(493, "iTunesStoreID");
add(494, "ManifestURL");
add(495, "ManagementFlags");
add(496, "PackageName");
add(497, "appVersionCode");
add(498, "appVersionName");
add(499, "appName");
add(500, "appFileUrl");
add(501, "description");
add(502, "instantInstall");
add(503, "enforceAppPolicy");
add(504, "AppCategory");
add(505, "appTag");
add(506, "appImagesUrl");
add(507, "appSize");
add(508, "appUUID");
add(509, "appIconUrl");
add(510, "networkPolicies");
add(511, "appClassification");
add(512, "appOutContainer");
add(513, "updateTime");
add(514, "jsonData");
add(515, "DocumentName");
add(516, "DocumentSize");
add(517, "DocumentFormat");
add(518, "DownloadURL");
add(519, "Auth");
add(520, "DocumentUUID");
add(521, "Version");
add(522, "DocumentDescription");
add(523, "DocumentCategory");
add(524, "IsCompressed");
add(525, "ReadAuthDay");
add(526, "RingNotify");
add(527, "EncryptLevel");
add(528, "DocumentType");
add(529, "tag");
add(530, "securitySettings");
add(531, "downloadPolicies");
add(532, "status");
add(533, "validateTime");
add(534, "burnAfterReading");
add(535, "alreadyOpened");
add(536, "message");
add(537, "delayTime");
add(538, "comType");
add(539, "password");
add(540, "password");
add(541, "message");
add(542, "delayTime");
add(543, "comType");
add(544, "password");
add(545, "parameters");
add(546, "message");
add(547, "delayTime");
add(548, "message");
add(549, "delayTime");
add(550, "message");
add(551, "delayTime");
add(552, "message");
add(553, "delayTime");
add(554, "isConnectReverseProxy");
add(555, "parameters");
add(556, "message");
add(557, "delayTime");
add(558, "message");
add(559, "delayTime");
add(560, "message");
add(561, "delayTime");
add(562, "Identifier");
add(563, "appId");
add(564, "appVersionName");
add(565, "appVersionCode");
add(566, "fromMarket");
add(567, "DocumentUUID");
add(568, "DocumentType");
add(569, "bluetoothGroupInfoBeanList");
add(570, "doorGroupInfoBeanList");
add(571, "nfcCardGroupInfoBeanList");
add(572, "phoneNumberGroupInfoBeanList");
add(573, "isFamilyNumberUpdate");
add(574, "fileName");
add(575, "format");
add(576, "quality");
add(577, "message");
add(578, "delayTime");
add(579, "timeFrequency");
add(580, "action");
add(581, "password");
add(582, "isLockLimitApp");
add(583, "needLockedAppList");
add(584, "appWhiteList");
add(585, "appBlackList");
add(586, "appRedList");
add(587, "isOnlyFromMyMarket");
add(588, "appPermissionConfigMap");
add(589, "mode");
add(590, "appInfos");
add(591, "wifiAppInfos");
add(592, "mobileDataAppInfos");
add(593, "param");
add(594, "param");
add(595, "param");
add(596, "appRestrictionType");
add(597, "appRestrictionParams");
add(598, "domainNameRestrictionType");
add(599, "domainNameRestrictionParams");
add(600, "isEnable");
add(601, "mac");
add(602, "this$0");
add(603, "param");
add(604, "bluetoothInfoBeanList");
add(605, "bluetoothGroupInfoBeanList");
add(606, "limitAppList");
add(607, "appKeyList");
add(608, "isAllPackage");
add(609, "appList");
add(610, "timeFrequencyList");
add(611, "prescribedList");
add(612, "actionList");
add(613, "isUploadPositionAfterOoc");
add(614, "isLostSimCardOoc");
add(615, "bindSimCardMode");
add(616, "mode");
add(617, "domainNameInfos");
add(618, "wifiDomainNameInfos");
add(619, "mobileDataDomainNameInfos");
add(620, "faceAcquisitionPro");
add(621, "installerWhiteList");
add(622, "iptableConfigList");
add(623, "iptableRule");
add(624, "baseNetworkControlRuleParam");
add(625, "commandline");
add(626, "generalSysAppKeyList");
add(627, "enablePolicyApps");
add(628, "userAppList");
add(629, "enableNotification");
add(630, "enableEnterpriseAppStore");
add(631, "enableDashboard");
add(632, "isHideSysApp");
add(633, "hideAppList");
add(634, "hideInnerModeList");
add(635, "isEnableNavigationBar");
add(636, "isDisabledPowerKey");
add(637, "isDisabledHomeKey");
add(638, "isDisabledBackKey");
add(639, "isDisabledTaskKey");
add(640, "isDisabledVolumeKey");
add(641, "adminCode");
add(642, "isKeepScreenOn");
add(643, "isEnableSettingMenuShortcut");
add(644, "settingMenuShortcutList");
add(645, "kioskModeMainApp");
add(646, "maxFailedAttempts");
add(647, "repeatable");
add(648, "checkTime");
add(649, "checkDuration");
add(650, "paramList");
add(651, "limitAppList");
add(652, "bluetoothInfoBeanList");
add(653, "whiteList");
add(654, "passwordMinimumLength");
add(655, "isForceCompliance");
add(656, "plmns1");
add(657, "plmns2");
add(658, "limitAppList");
add(659, "radius");
add(660, "longitude");
add(661, "latitude");
add(662, "attachedConditions");
add(663, "installerWhiteList");
add(664, "editable");
add(665, "option");
add(666, "allowShortNumber");
add(667, "phoneNumberWhiteList");
add(668, "phoneNumberGroupInfoBeanList");
add(669, "allowFamilyNumber");
add(670, "watermarkContentTypes");
add(671, "watermarkSize");
add(672, "watermarkColorStr");
add(673, "enable");
add(674, "ssid");
add(675, "mac");
add(676, "param");
add(677, "mRuleDefinitionBean");
add(678, "fenRef");
add(679, "value");
add(680, "ruleType");
add(0x7fff, "");
