(function () {
    const ACCOUNT_INDEX_KEY = "happykua-accounts";
    const CURRENT_ACCOUNT_KEY = "happykua-current-account";
    const USER_DATA_PREFIX = "happykua-user-data:";
    const GUEST_ID = "guest";

    const moduleDefinitions = [
        {
            id: "threeGoodThings",
            label: "三件好事",
            href: "three-good-things.html",
            emptyText: "还没有练习记录",
            countText(data) {
                const count = Array.isArray(data.records) ? data.records.length : 0;
                return count ? `${count} 天练习` : this.emptyText;
            },
            isComplete(data) {
                return Array.isArray(data.records) && data.records.length > 0;
            }
        },
        {
            id: "science",
            label: "科学系统",
            href: "science.html",
            emptyText: "还没有阅读记录",
            countText(data) {
                return data.visitedAt ? "已进入科学地图" : this.emptyText;
            },
            isComplete(data) {
                return Boolean(data.visitedAt);
            }
        },
        {
            id: "talent",
            label: "天赋发现",
            href: "talent.html",
            emptyText: "还没有生成报告",
            countText(data) {
                if (data.report) return "已生成轻量报告";
                const answers = data.state?.talentAnswers;
                return Array.isArray(answers) && answers.length ? `${answers.length}/4 个线索` : this.emptyText;
            },
            isComplete(data) {
                return Boolean(data.report);
            }
        },
        {
            id: "card",
            label: "幸福卡牌",
            href: "card.html",
            emptyText: "还没有抽卡",
            countText(data) {
                const draws = Number(data.draws || 0);
                return draws ? `${draws} 次抽卡` : this.emptyText;
            },
            isComplete(data) {
                return Number(data.draws || 0) > 0;
            }
        },
        {
            id: "family",
            label: "家庭指南",
            href: "family.html",
            emptyText: "还没有家庭方案",
            countText(data) {
                return data.report ? "已保存家庭方案" : this.emptyText;
            },
            isComplete(data) {
                return Boolean(data.report);
            }
        },
        {
            id: "book",
            label: "幸福之书",
            href: "book.html",
            emptyText: "还没有打开档案",
            countText(data) {
                return data.openedAt ? "已打开个人档案" : this.emptyText;
            },
            isComplete(data) {
                return Boolean(data.openedAt);
            }
        },
        {
            id: "life100",
            label: "幸福人生100岁",
            href: "人生100/index.html",
            emptyText: "还没有选择年龄",
            countText(data) {
                return Number.isFinite(Number(data.activeAge)) ? `最近查看 ${data.activeAge} 岁` : this.emptyText;
            },
            isComplete(data) {
                return Number.isFinite(Number(data.activeAge));
            }
        }
    ];

    const happinessEvents = [
        {
            id: "gratitudeBridge",
            title: "感谢之桥",
            copy: "你把一件小好事认真收下，心里的路又亮了一格。"
        },
        {
            id: "bodyPause",
            title: "身体小憩",
            copy: "你停下来照顾自己，幸福不是冲刺，是会呼吸的节奏。"
        },
        {
            id: "braveStep",
            title: "勇气一步",
            copy: "你完成了一个真实行动，小小一步也会把世界推开。"
        },
        {
            id: "knowledgeLight",
            title: "知识微光",
            copy: "新的理解正在变成路标，知道之后，做到会更容易。"
        },
        {
            id: "familyLamp",
            title: "家庭暖灯",
            copy: "当关系被认真看见，家里会多一盏可以回来的灯。"
        }
    ];

    const rewardRules = {
        dailyCheckIn: { label: "每日旅程签到", coins: 10, happiness: 5, daily: true },
        threeGoodThingsSaved: { label: "完成三件好事", coins: 35, happiness: 25, daily: true },
        talentReportGenerated: { label: "生成天赋报告", coins: 60, happiness: 40, daily: false },
        familyReportGenerated: { label: "生成家庭方案", coins: 60, happiness: 40, daily: false },
        scienceVisit: { label: "进入科学系统", coins: 10, happiness: 8, daily: true },
        cardDraw: { label: "幸福卡牌抽卡", coins: 8, happiness: 5, daily: true, dailyLimit: 3 },
        life100GuideGenerated: { label: "生成百岁指南", coins: 12, happiness: 8, daily: true },
        bookOpened: { label: "打开幸福之书", coins: 8, happiness: 5, daily: true }
    };

    const shopItems = [
        {
            id: "sunnyHoodie",
            type: "cosmetic",
            category: "avatar",
            label: "阳光帽衫",
            description: "给路上的小人换一件暖暖的帽衫。",
            price: 80
        },
        {
            id: "sproutCape",
            type: "cosmetic",
            category: "avatar",
            label: "小芽披风",
            description: "每一步都像有一片新叶在背后长出来。",
            price: 120
        },
        {
            id: "rainbowBackpack",
            type: "cosmetic",
            category: "avatar",
            label: "彩虹背包",
            description: "把今天收集到的光，背在身上继续走。",
            price: 160
        },
        {
            id: "grassRoad",
            type: "cosmetic",
            category: "road",
            label: "草地路",
            description: "让幸福旅程变成柔软的绿色小径。",
            price: 100
        },
        {
            id: "starRoad",
            type: "cosmetic",
            category: "road",
            label: "星光夜路",
            description: "夜里也能看见前进方向的星光路线。",
            price: 150
        },
        {
            id: "vip15",
            type: "vip",
            label: "VIP 问答 15 分钟",
            description: "购买后增加 15 分钟 VIP 问答权益余额。",
            price: 200,
            minutes: 15
        },
        {
            id: "vip60",
            type: "vip",
            label: "VIP 问答 60 分钟",
            description: "购买后增加 60 分钟 VIP 问答权益余额。",
            price: 650,
            minutes: 60
        }
    ];

    const journeyScenes = [
        {
            id: "morning-start",
            label: "清晨出发",
            image: "assets/journey-scenes/morning-start.jpg",
            unlockAt: 0,
            position: "center",
            mobilePosition: "36% center"
        },
        {
            id: "meadow-path",
            label: "草坡练习",
            image: "assets/journey-scenes/meadow-path.jpg",
            unlockAt: 10,
            position: "center",
            mobilePosition: "56% center"
        },
        {
            id: "cloud-bridge",
            label: "云桥事件",
            image: "assets/journey-scenes/cloud-bridge.jpg",
            unlockAt: 20,
            position: "center",
            mobilePosition: "42% center"
        },
        {
            id: "mountain-climb",
            label: "山路攀登",
            image: "assets/journey-scenes/mountain-climb.jpg",
            unlockAt: 40,
            position: "center",
            mobilePosition: "32% center"
        },
        {
            id: "sunset-platform",
            label: "黄昏高台",
            image: "assets/journey-scenes/sunset-platform.jpg",
            unlockAt: 70,
            position: "center",
            mobilePosition: "62% center"
        },
        {
            id: "star-camp",
            label: "星夜营地",
            image: "assets/journey-scenes/star-camp.jpg",
            unlockAt: 100,
            position: "center",
            mobilePosition: "34% center"
        },
        {
            id: "rain-clear",
            label: "雨后放晴",
            image: "assets/journey-scenes/rain-clear.jpg",
            unlockAt: 140,
            position: "center",
            mobilePosition: "62% center"
        }
    ];

    const journeyActionScenes = {
        dailyCheckIn: "morning-start",
        threeGoodThingsSaved: "cloud-bridge",
        scienceVisit: "cloud-bridge",
        cardDraw: "rain-clear",
        life100GuideGenerated: "mountain-climb",
        talentReportGenerated: "sunset-platform",
        familyReportGenerated: "sunset-platform",
        bookOpened: "star-camp"
    };

    function now() {
        return new Date().toISOString();
    }

    function todayKey() {
        return new Date().toISOString().slice(0, 10);
    }

    function safeParse(value, fallback) {
        try {
            return JSON.parse(value);
        } catch {
            return fallback;
        }
    }

    function normalizeIdentity(value) {
        return String(value || "")
            .trim()
            .toLowerCase()
            .replace(/\s+/g, " ");
    }

    function hashString(value) {
        let hash = 2166136261;
        for (let index = 0; index < value.length; index += 1) {
            hash ^= value.charCodeAt(index);
            hash = Math.imul(hash, 16777619);
        }
        return (hash >>> 0).toString(36);
    }

    function dataKey(userId) {
        return `${USER_DATA_PREFIX}${userId || GUEST_ID}`;
    }

    function getAccounts() {
        const accounts = safeParse(localStorage.getItem(ACCOUNT_INDEX_KEY), {});
        return accounts && typeof accounts === "object" && !Array.isArray(accounts) ? accounts : {};
    }

    function saveAccounts(accounts) {
        localStorage.setItem(ACCOUNT_INDEX_KEY, JSON.stringify(accounts));
    }

    function getCurrentAccountId() {
        return localStorage.getItem(CURRENT_ACCOUNT_KEY) || GUEST_ID;
    }

    function getCurrentUser() {
        const currentId = getCurrentAccountId();
        if (currentId === GUEST_ID) {
            return {
                id: GUEST_ID,
                name: "访客",
                email: "",
                isGuest: true
            };
        }

        const account = getAccounts()[currentId];
        if (!account) {
            localStorage.removeItem(CURRENT_ACCOUNT_KEY);
            return getCurrentUser();
        }

        return {
            ...account,
            isGuest: false
        };
    }

    function defaultUserData(user) {
        return {
            version: 1,
            userId: user.id,
            profile: {
                name: user.name,
                email: user.email || ""
            },
            modules: {},
            economy: defaultEconomyState(),
            activity: [],
            createdAt: now(),
            updatedAt: now()
        };
    }

    function defaultEconomyState() {
        return {
            coins: 0,
            happiness: 0,
            level: 1,
            vipMinutes: 0,
            ownedCosmetics: ["defaultAvatar", "defaultRoad"],
            equippedCosmetics: {
                avatar: "defaultAvatar",
                road: "defaultRoad"
            },
            rewardLedger: {},
            eventLog: []
        };
    }

    function normalizeEconomyState(economy) {
        const defaults = defaultEconomyState();
        const nextEconomy = economy && typeof economy === "object" ? economy : {};
        const happiness = Math.max(0, Number(nextEconomy.happiness || 0));
        const ownedCosmetics = Array.isArray(nextEconomy.ownedCosmetics)
            ? Array.from(new Set([...defaults.ownedCosmetics, ...nextEconomy.ownedCosmetics]))
            : defaults.ownedCosmetics;

        return {
            ...defaults,
            ...nextEconomy,
            coins: Math.max(0, Number(nextEconomy.coins || 0)),
            happiness,
            level: Math.max(1, Math.floor(happiness / 100) + 1),
            vipMinutes: Math.max(0, Number(nextEconomy.vipMinutes || 0)),
            ownedCosmetics,
            equippedCosmetics: {
                ...defaults.equippedCosmetics,
                ...(nextEconomy.equippedCosmetics || {})
            },
            rewardLedger: nextEconomy.rewardLedger && typeof nextEconomy.rewardLedger === "object"
                ? nextEconomy.rewardLedger
                : {},
            eventLog: Array.isArray(nextEconomy.eventLog) ? nextEconomy.eventLog : []
        };
    }

    function ensureUserDataShape(data, user) {
        const shaped = data && typeof data === "object" ? data : defaultUserData(user);
        shaped.version = shaped.version || 1;
        shaped.userId = shaped.userId || user.id;
        shaped.profile = {
            name: shaped.profile?.name || user.name,
            email: shaped.profile?.email || user.email || ""
        };
        shaped.modules = shaped.modules && typeof shaped.modules === "object" ? shaped.modules : {};
        shaped.economy = normalizeEconomyState(shaped.economy);
        shaped.activity = Array.isArray(shaped.activity) ? shaped.activity : [];
        shaped.createdAt = shaped.createdAt || now();
        shaped.updatedAt = shaped.updatedAt || now();
        return shaped;
    }

    function getUserData(userId = getCurrentUser().id) {
        const user = userId === getCurrentUser().id
            ? getCurrentUser()
            : { id: userId, name: userId === GUEST_ID ? "访客" : "HappyKua User", email: "" };
        const data = safeParse(localStorage.getItem(dataKey(userId)), null);
        return ensureUserDataShape(data, user);
    }

    function saveUserData(data) {
        const nextData = {
            ...data,
            economy: normalizeEconomyState(data.economy),
            updatedAt: now()
        };
        localStorage.setItem(dataKey(nextData.userId), JSON.stringify(nextData));
        return nextData;
    }

    function getEconomyState(userId = getCurrentUser().id) {
        return normalizeEconomyState(getUserData(userId).economy);
    }

    function getShopItem(itemId) {
        return shopItems.find((item) => item.id === itemId) || null;
    }

    function getJourneyScene(sceneId) {
        return journeyScenes.find((scene) => scene.id === sceneId) || journeyScenes[0];
    }

    function pickJourneyScene(economy, latestEvent) {
        if (latestEvent?.actionId && journeyActionScenes[latestEvent.actionId]) {
            return getJourneyScene(journeyActionScenes[latestEvent.actionId]);
        }

        const unlockedScenes = journeyScenes.filter((scene) => economy.happiness >= scene.unlockAt);
        return unlockedScenes[unlockedScenes.length - 1] || journeyScenes[0];
    }

    function getRewardRule(actionId, payload = {}) {
        const rule = rewardRules[actionId] || {};
        return {
            label: payload.label || rule.label || actionId,
            coins: Number(payload.coins ?? rule.coins ?? 0),
            happiness: Number(payload.happiness ?? rule.happiness ?? 0),
            daily: payload.daily ?? rule.daily ?? true,
            dailyLimit: Number(payload.dailyLimit ?? rule.dailyLimit ?? 1)
        };
    }

    function rewardLedgerKey(actionId, reward) {
        return reward.daily ? `${actionId}:${todayKey()}` : actionId;
    }

    function pickHappinessEvent(actionId, eventLog) {
        const knownEventMap = {
            threeGoodThingsSaved: "gratitudeBridge",
            scienceVisit: "knowledgeLight",
            familyReportGenerated: "familyLamp",
            cardDraw: "braveStep",
            life100GuideGenerated: "knowledgeLight",
            bookOpened: "bodyPause"
        };
        const preferred = happinessEvents.find((event) => event.id === knownEventMap[actionId]);
        if (preferred) return preferred;
        return happinessEvents[eventLog.length % happinessEvents.length];
    }

    function awardHappinessAction(actionId, payload = {}) {
        const reward = getRewardRule(actionId, payload);
        const user = getCurrentUser();
        const data = getUserData(user.id);
        const economy = normalizeEconomyState(data.economy);
        const ledgerKey = rewardLedgerKey(actionId, reward);
        const currentCount = Number(economy.rewardLedger[ledgerKey] || 0);
        const dailyLimit = Math.max(1, reward.dailyLimit || 1);

        if (currentCount >= dailyLimit) {
            return {
                awarded: false,
                reason: "already-awarded",
                actionId,
                economy
            };
        }

        const event = pickHappinessEvent(actionId, economy.eventLog);
        const rewardEvent = {
            id: `${event.id}-${Date.now()}`,
            eventId: event.id,
            title: payload.eventTitle || event.title,
            copy: payload.eventCopy || event.copy,
            actionId,
            label: reward.label,
            coins: reward.coins,
            happiness: reward.happiness,
            at: now()
        };

        economy.coins += Math.max(0, reward.coins);
        economy.happiness += Math.max(0, reward.happiness);
        economy.level = Math.max(1, Math.floor(economy.happiness / 100) + 1);
        economy.rewardLedger[ledgerKey] = currentCount + 1;
        economy.eventLog = [rewardEvent, ...economy.eventLog].slice(0, 24);

        data.economy = economy;
        data.activity = [
            {
                moduleId: payload.moduleId || actionId,
                type: "economy-awarded",
                at: now()
            },
            ...data.activity
        ].slice(0, 80);

        const saved = saveUserData(data);
        emitEconomyChange("award", rewardEvent);
        return {
            awarded: true,
            actionId,
            event: rewardEvent,
            economy: saved.economy
        };
    }

    function purchaseShopItem(itemId) {
        const item = getShopItem(itemId);
        if (!item) {
            return { purchased: false, reason: "missing-item", itemId, economy: getEconomyState() };
        }

        const user = getCurrentUser();
        const data = getUserData(user.id);
        const economy = normalizeEconomyState(data.economy);
        const alreadyOwned = item.type === "cosmetic" && economy.ownedCosmetics.includes(item.id);

        if (alreadyOwned) {
            economy.equippedCosmetics[item.category] = item.id;
            data.economy = economy;
            const saved = saveUserData(data);
            emitEconomyChange("equip", { item });
            return { purchased: false, reason: "already-owned", item, economy: saved.economy };
        }

        if (economy.coins < item.price) {
            return { purchased: false, reason: "insufficient-coins", item, economy };
        }

        economy.coins -= item.price;
        if (item.type === "vip") {
            economy.vipMinutes += item.minutes;
        } else {
            economy.ownedCosmetics = Array.from(new Set([...economy.ownedCosmetics, item.id]));
            economy.equippedCosmetics[item.category] = item.id;
        }

        data.economy = economy;
        data.activity = [
            {
                moduleId: "shop",
                type: "shop-purchase",
                at: now()
            },
            ...data.activity
        ].slice(0, 80);

        const saved = saveUserData(data);
        emitEconomyChange("purchase", { item });
        return { purchased: true, item, economy: saved.economy };
    }

    function equipCosmetic(itemId) {
        const item = getShopItem(itemId);
        const economy = getEconomyState();
        if (!item || item.type !== "cosmetic") {
            return { equipped: false, reason: "missing-cosmetic", itemId, economy };
        }
        if (!economy.ownedCosmetics.includes(item.id)) {
            return { equipped: false, reason: "not-owned", item, economy };
        }

        const user = getCurrentUser();
        const data = getUserData(user.id);
        data.economy = {
            ...economy,
            equippedCosmetics: {
                ...economy.equippedCosmetics,
                [item.category]: item.id
            }
        };
        const saved = saveUserData(data);
        emitEconomyChange("equip", { item });
        return { equipped: true, item, economy: saved.economy };
    }

    function getJourneyState(userId = getCurrentUser().id) {
        const economy = getEconomyState(userId);
        const latestEvent = economy.eventLog[0] || null;
        const scene = pickJourneyScene(economy, latestEvent);
        const progressInLevel = economy.happiness % 100;
        const avatarPosition = Math.min(92, 8 + progressInLevel * 0.84);
        return {
            economy,
            latestEvent,
            scene,
            sceneId: scene.id,
            journeyScenes,
            avatarPosition,
            levelProgress: progressInLevel,
            nextLevelAt: economy.level * 100,
            shopItems
        };
    }

    function getModuleData(moduleId, userId = getCurrentUser().id) {
        const data = getUserData(userId);
        return data.modules[moduleId] || {};
    }

    function hasMeaningfulModuleData(data) {
        if (!data || typeof data !== "object") return false;
        return Object.keys(data).some((key) => {
            const value = data[key];
            if (value === null || value === undefined) return false;
            if (Array.isArray(value)) return value.length > 0;
            if (typeof value === "object") return Object.keys(value).length > 0;
            return Boolean(value);
        });
    }

    function setModuleData(moduleId, moduleData) {
        const user = getCurrentUser();
        const data = getUserData(user.id);
        const existing = data.modules[moduleId] || {};
        const nextModuleData = {
            ...existing,
            ...moduleData,
            progress: {
                ...(existing.progress || {}),
                ...(moduleData.progress || {})
            },
            updatedAt: now()
        };

        data.modules[moduleId] = nextModuleData;
        data.activity = [
            {
                moduleId,
                type: "module-updated",
                at: now()
            },
            ...data.activity
        ].slice(0, 80);

        const saved = saveUserData(data);
        emitDataChange(moduleId, saved.modules[moduleId]);
        return saved.modules[moduleId];
    }

    function clearModuleData(moduleId) {
        const user = getCurrentUser();
        const data = getUserData(user.id);
        delete data.modules[moduleId];
        data.activity = [
            {
                moduleId,
                type: "module-cleared",
                at: now()
            },
            ...data.activity
        ].slice(0, 80);
        saveUserData(data);
        emitDataChange(moduleId, {});
    }

    function recordModuleEvent(moduleId, eventType, payload = {}) {
        const moduleData = getModuleData(moduleId);
        const events = Array.isArray(moduleData.events) ? moduleData.events : [];
        return setModuleData(moduleId, {
            events: [
                {
                    type: eventType,
                    payload,
                    at: now()
                },
                ...events
            ].slice(0, 40),
            lastActivityAt: now()
        });
    }

    function mergeGuestDataIntoUser(userId) {
        const guestData = safeParse(localStorage.getItem(dataKey(GUEST_ID)), null);
        if (!guestData || !guestData.modules) return;

        const targetData = getUserData(userId);
        if (targetData.guestImportedAt) return;

        let changed = false;
        for (const [moduleId, moduleData] of Object.entries(guestData.modules)) {
            if (!hasMeaningfulModuleData(targetData.modules[moduleId]) && hasMeaningfulModuleData(moduleData)) {
                targetData.modules[moduleId] = moduleData;
                changed = true;
            }
        }

        if (guestData.economy && !targetData.economyImportedAt) {
            const targetEconomy = normalizeEconomyState(targetData.economy);
            const guestEconomy = normalizeEconomyState(guestData.economy);
            targetData.economy = {
                ...targetEconomy,
                coins: Math.max(targetEconomy.coins, guestEconomy.coins),
                happiness: Math.max(targetEconomy.happiness, guestEconomy.happiness),
                level: Math.max(targetEconomy.level, guestEconomy.level),
                vipMinutes: Math.max(targetEconomy.vipMinutes, guestEconomy.vipMinutes),
                ownedCosmetics: Array.from(new Set([...targetEconomy.ownedCosmetics, ...guestEconomy.ownedCosmetics])),
                equippedCosmetics: {
                    ...targetEconomy.equippedCosmetics,
                    ...guestEconomy.equippedCosmetics
                },
                rewardLedger: {
                    ...targetEconomy.rewardLedger,
                    ...guestEconomy.rewardLedger
                },
                eventLog: [...guestEconomy.eventLog, ...targetEconomy.eventLog].slice(0, 24)
            };
            targetData.economyImportedAt = now();
            changed = true;
        }

        if (changed) {
            targetData.guestImportedAt = now();
            saveUserData(targetData);
        }
    }

    function loginAccount(payload) {
        const name = String(payload?.name || "").trim();
        const email = String(payload?.email || "").trim();
        const identity = normalizeIdentity(email || name);

        if (!identity) {
            throw new Error("请输入昵称或邮箱。");
        }

        const id = `user-${hashString(identity)}`;
        const accounts = getAccounts();
        const account = {
            ...(accounts[id] || {}),
            id,
            name: name || email || "HappyKua User",
            email,
            updatedAt: now(),
            createdAt: accounts[id]?.createdAt || now(),
            lastLoginAt: now()
        };

        accounts[id] = account;
        saveAccounts(accounts);
        mergeGuestDataIntoUser(id);
        localStorage.setItem(CURRENT_ACCOUNT_KEY, id);

        const data = getUserData(id);
        data.profile = {
            name: account.name,
            email: account.email
        };
        saveUserData(data);
        emitUserChange("login");
        return account;
    }

    function logoutAccount() {
        localStorage.removeItem(CURRENT_ACCOUNT_KEY);
        emitUserChange("logout");
    }

    function getProgressSummary(userId = getCurrentUser().id) {
        const data = getUserData(userId);
        const economy = normalizeEconomyState(data.economy);
        const modules = moduleDefinitions.map((definition) => {
            const moduleData = data.modules[definition.id] || {};
            const complete = definition.isComplete(moduleData);
            return {
                id: definition.id,
                label: definition.label,
                href: definition.href,
                complete,
                statusText: definition.countText(moduleData),
                updatedAt: moduleData.updatedAt || moduleData.progress?.lastActivityAt || ""
            };
        });

        const completedCount = modules.filter((item) => item.complete).length;
        return {
            user: getCurrentUser(),
            economy,
            completedCount,
            totalCount: modules.length,
            percent: Math.round((completedCount / modules.length) * 100),
            modules
        };
    }

    function injectStyles() {
        if (document.getElementById("happykua-auth-styles")) return;

        const style = document.createElement("style");
        style.id = "happykua-auth-styles";
        style.textContent = `
            .hkua-account-root {
                position: relative;
                font-family: inherit;
            }

            .hkua-account-root.is-floating {
                position: fixed;
                top: 14px;
                right: 14px;
                z-index: 90;
            }

            .hkua-account-button,
            .hkua-form-button,
            .hkua-ghost-button {
                min-height: 38px;
                border-radius: 8px;
                border: 1px solid rgba(30, 41, 59, 0.14);
                font: inherit;
                font-size: 12px;
                font-weight: 900;
                cursor: pointer;
            }

            .hkua-account-button {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                background: rgba(255, 255, 255, 0.9);
                color: #1e293b;
                padding: 8px 11px;
                box-shadow: 0 14px 28px rgba(15, 23, 42, 0.12);
                backdrop-filter: blur(14px);
            }

            .hkua-account-mark {
                display: grid;
                place-items: center;
                width: 24px;
                height: 24px;
                border-radius: 999px;
                color: white;
                background: linear-gradient(135deg, #ff6b6b, #fcc419, #51cf66, #339af0);
                font-size: 10px;
                letter-spacing: 0;
            }

            .hkua-account-panel {
                position: absolute;
                top: calc(100% + 8px);
                right: 0;
                width: min(340px, calc(100vw - 28px));
                border: 1px solid rgba(30, 41, 59, 0.12);
                border-radius: 8px;
                background: rgba(255, 255, 255, 0.96);
                box-shadow: 0 24px 54px rgba(15, 23, 42, 0.18);
                padding: 14px;
                color: #1e293b;
                backdrop-filter: blur(18px);
            }

            .hkua-account-panel[hidden] {
                display: none;
            }

            .hkua-panel-title {
                margin: 0;
                font-size: 15px;
                font-weight: 900;
            }

            .hkua-panel-copy {
                margin: 4px 0 0;
                color: #64748b;
                font-size: 12px;
                line-height: 1.6;
            }

            .hkua-login-form {
                display: grid;
                gap: 8px;
                margin-top: 12px;
            }

            .hkua-login-form label {
                display: grid;
                gap: 4px;
                color: #475569;
                font-size: 11px;
                font-weight: 900;
            }

            .hkua-login-form input {
                width: 100%;
                min-height: 38px;
                border: 1px solid rgba(30, 41, 59, 0.14);
                border-radius: 8px;
                padding: 8px 10px;
                color: #0f172a;
                background: #fff;
                outline: none;
            }

            .hkua-login-form input:focus {
                border-color: #339af0;
                box-shadow: 0 0 0 3px rgba(51, 154, 240, 0.16);
            }

            .hkua-form-button {
                border: 0;
                background: #1e293b;
                color: #fff;
                padding: 8px 10px;
            }

            .hkua-ghost-button {
                width: 100%;
                margin-top: 10px;
                background: #f8fafc;
                color: #475569;
            }

            .hkua-progress-list {
                display: grid;
                gap: 8px;
                margin-top: 12px;
            }

            .hkua-progress-row {
                display: grid;
                grid-template-columns: auto 1fr;
                gap: 10px;
                align-items: center;
                text-decoration: none;
                color: inherit;
                border: 1px solid rgba(30, 41, 59, 0.1);
                border-radius: 8px;
                padding: 9px;
                background: #fff;
            }

            .hkua-progress-dot {
                width: 10px;
                height: 10px;
                border-radius: 999px;
                background: #cbd5e1;
            }

            .hkua-progress-row.is-complete .hkua-progress-dot {
                background: #22c55e;
                box-shadow: 0 0 0 4px rgba(34, 197, 94, 0.12);
            }

            .hkua-progress-name {
                margin: 0;
                font-size: 12px;
                font-weight: 900;
            }

            .hkua-progress-status {
                margin: 2px 0 0;
                color: #64748b;
                font-size: 11px;
            }

            .hkua-progress-card {
                border: 1px solid rgba(30, 41, 59, 0.1);
                border-radius: 8px;
                background: rgba(255, 255, 255, 0.86);
                box-shadow: 0 20px 44px rgba(15, 23, 42, 0.08);
                padding: 18px;
            }

            .hkua-progress-meter {
                overflow: hidden;
                height: 9px;
                border-radius: 999px;
                background: #e2e8f0;
            }

            .hkua-progress-meter span {
                display: block;
                height: 100%;
                border-radius: inherit;
                background: linear-gradient(90deg, #ff6b6b, #fcc419, #51cf66, #339af0);
            }

            @media (max-width: 640px) {
                .hkua-account-root:not(.is-floating) .hkua-account-panel {
                    right: -8px;
                }
            }
        `;
        document.head.appendChild(style);
    }

    function escapeHtml(value) {
        return String(value ?? "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    function renderProgressRows(summary) {
        return summary.modules.map((module) => `
            <a class="hkua-progress-row ${module.complete ? "is-complete" : ""}" href="${module.href}">
                <span class="hkua-progress-dot"></span>
                <span>
                    <p class="hkua-progress-name">${escapeHtml(module.label)}</p>
                    <p class="hkua-progress-status">${escapeHtml(module.statusText)}</p>
                </span>
            </a>
        `).join("");
    }

    function injectAccountWidget(options = {}) {
        if (!document.body) return null;
        injectStyles();

        const mount = typeof options.mount === "string"
            ? document.querySelector(options.mount)
            : options.mount || document.querySelector("[data-happykua-account-widget]");
        const root = mount || document.createElement("div");
        root.classList.add("hkua-account-root");
        root.classList.toggle("is-floating", !mount);
        root.dataset.happykuaAccountWidget = "true";

        if (!mount) {
            document.body.appendChild(root);
        }

        const summary = getProgressSummary();
        const user = summary.user;
        const displayName = user.name || "访客";
        const initials = displayName.trim().slice(0, 2).toUpperCase() || "ID";

        root.innerHTML = `
            <button class="hkua-account-button" type="button" data-hkua-account-toggle aria-expanded="false">
                <span class="hkua-account-mark">${escapeHtml(initials)}</span>
                <span>${escapeHtml(user.isGuest ? "访客" : displayName)}</span>
            </button>
            <div class="hkua-account-panel" hidden>
                <p class="hkua-panel-title">${escapeHtml(user.isGuest ? "本地账号" : displayName)}</p>
                <p class="hkua-panel-copy">
                    ${escapeHtml(user.isGuest ? "登录后，这台设备上的练习、报告和进度会归到你的个人档案。" : `已记录 ${summary.completedCount}/${summary.totalCount} 个模块进度。`)}
                </p>
                <div class="hkua-progress-list" style="grid-template-columns: repeat(3, 1fr);">
                    <div class="hkua-progress-row" style="grid-template-columns: 1fr;">
                        <p class="hkua-progress-name">幸福币</p>
                        <p class="hkua-progress-status">${summary.economy.coins}</p>
                    </div>
                    <div class="hkua-progress-row" style="grid-template-columns: 1fr;">
                        <p class="hkua-progress-name">幸福度</p>
                        <p class="hkua-progress-status">${summary.economy.happiness}</p>
                    </div>
                    <div class="hkua-progress-row" style="grid-template-columns: 1fr;">
                        <p class="hkua-progress-name">VIP</p>
                        <p class="hkua-progress-status">${summary.economy.vipMinutes} 分钟</p>
                    </div>
                </div>
                <form class="hkua-login-form" data-hkua-login-form>
                    <label>
                        昵称
                        <input name="name" autocomplete="name" value="${escapeHtml(user.isGuest ? "" : user.name)}" placeholder="例如：开心研究员">
                    </label>
                    <label>
                        邮箱或标识
                        <input name="email" autocomplete="email" value="${escapeHtml(user.isGuest ? "" : user.email || "")}" placeholder="用于区分本地账号">
                    </label>
                    <button class="hkua-form-button" type="submit">登录 / 创建本地账号</button>
                </form>
                <div class="hkua-progress-list">
                    ${renderProgressRows(summary)}
                </div>
                ${user.isGuest ? "" : '<button class="hkua-ghost-button" type="button" data-hkua-logout>退出当前账号</button>'}
            </div>
        `;

        const toggle = root.querySelector("[data-hkua-account-toggle]");
        const panel = root.querySelector(".hkua-account-panel");
        toggle.addEventListener("click", () => {
            const isOpen = !panel.hidden;
            panel.hidden = isOpen;
            toggle.setAttribute("aria-expanded", String(!isOpen));
        });

        root.querySelector("[data-hkua-login-form]").addEventListener("submit", (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            try {
                loginAccount({
                    name: formData.get("name"),
                    email: formData.get("email")
                });
                injectAccountWidget({ mount: root });
                renderAllProgressPanels();
            } catch (error) {
                window.alert(error.message);
            }
        });

        const logoutButton = root.querySelector("[data-hkua-logout]");
        if (logoutButton) {
            logoutButton.addEventListener("click", () => {
                logoutAccount();
                injectAccountWidget({ mount: root });
                renderAllProgressPanels();
            });
        }

        return root;
    }

    function renderProgressPanel(target) {
        injectStyles();
        const element = typeof target === "string" ? document.querySelector(target) : target;
        if (!element) return;

        const summary = getProgressSummary();
        const userLabel = summary.user.isGuest ? "访客档案" : `${summary.user.name} 的档案`;

        element.innerHTML = `
            <div class="hkua-progress-card">
                <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                        <p class="text-xs font-black uppercase tracking-widest text-slate-400">Personal Progress</p>
                        <h2 class="mt-1 text-2xl font-black text-slate-800">${escapeHtml(userLabel)}</h2>
                        <p class="mt-2 text-sm leading-6 text-slate-500">账号系统会把三好练习、天赋报告、家庭方案和百岁年龄指南归档到同一个本地用户空间。</p>
                    </div>
                    <div class="min-w-[160px]">
                        <div class="text-right text-3xl font-black text-slate-800">${summary.percent}%</div>
                        <div class="hkua-progress-meter mt-2"><span style="width:${summary.percent}%"></span></div>
                        <p class="mt-2 text-right text-xs font-black text-slate-400">${summary.completedCount}/${summary.totalCount} modules</p>
                    </div>
                </div>
                <div class="mt-4 grid gap-3 md:grid-cols-4">
                    ${renderProgressRows(summary)}
                </div>
            </div>
        `;
    }

    function renderAllProgressPanels() {
        document.querySelectorAll("[data-happykua-progress-panel]").forEach((panel) => {
            renderProgressPanel(panel);
        });
    }

    function emitUserChange(reason) {
        window.dispatchEvent(new CustomEvent("happykua:user-changed", {
            detail: {
                reason,
                user: getCurrentUser()
            }
        }));
    }

    function emitDataChange(moduleId, moduleData) {
        window.dispatchEvent(new CustomEvent("happykua:data-changed", {
            detail: {
                moduleId,
                moduleData,
                user: getCurrentUser()
            }
        }));
        renderAllProgressPanels();
    }

    function emitEconomyChange(reason, payload) {
        window.dispatchEvent(new CustomEvent("happykua:economy-changed", {
            detail: {
                reason,
                payload,
                economy: getEconomyState(),
                journey: getJourneyState(),
                user: getCurrentUser()
            }
        }));
        renderAllProgressPanels();
    }

    const api = {
        ACCOUNT_INDEX_KEY,
        CURRENT_ACCOUNT_KEY,
        USER_DATA_PREFIX,
        getCurrentUser,
        loginAccount,
        logoutAccount,
        getUserData,
        getModuleData,
        setModuleData,
        clearModuleData,
        recordModuleEvent,
        getEconomyState,
        awardHappinessAction,
        purchaseShopItem,
        equipCosmetic,
        getJourneyState,
        shopItems,
        journeyScenes,
        getProgressSummary,
        injectAccountWidget,
        renderProgressPanel,
        renderAllProgressPanels
    };

    window.HappyKuaAuth = api;

    document.addEventListener("DOMContentLoaded", () => {
        if (document.querySelector("[data-happykua-account-widget]")) {
            injectAccountWidget();
        }
        renderAllProgressPanels();
    });
})();
