const getRandomValue = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      minPlayerDamage: 5,
      maxPlayerDamage: 12,
      minSpecialPlayerDamage: 10,
      maxSpecialPlayerDamage: 25,
      minPlayerHeal: 8,
      maxPlayerHeal: 20,
      monsterHealth: 100,
      minMonsterDamage: 8,
      maxMonsterDamage: 15,
      currentRound: 0,
      winner: null,
      logMessages: [],
    };
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "monster";
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "player";
      }
    },
  },
  computed: {
    monsterBarStyles() {
      if (this.monsterHealth < 0) {
        this.monsterHealth = 0;
      }
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyles() {
      if (this.playerHealth < 0) {
        this.playerHealth = 0;
      }
      return { width: this.playerHealth + "%" };
    },
    mayUseSpecialAttack() {
      return this.currentRound % 3 !== 0;
    },
  },
  methods: {
    startGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.currentRound = 0;
      this.winner = null;
      this.logMessages = [];
    },
    attackMonster() {
      this.currentRound++;
      const playerDamage = getRandomValue(this.minPlayerDamage, this.maxPlayerDamage);
      this.monsterHealth -= playerDamage;
      this.addLogMessage("player", "attack", playerDamage);
      this.attackPlayer();
    },
    attackPlayer() {
      const monsterDamage = getRandomValue(this.minMonsterDamage, this.maxMonsterDamage);
      this.playerHealth -= monsterDamage;
      this.addLogMessage("monster", "attack", monsterDamage);
    },
    specialAttackMonster() {
      this.currentRound++;
      const specialPlayerDamage = getRandomValue(
        this.minSpecialPlayerDamage,
        this.maxSpecialPlayerDamage
      );
      this.monsterHealth -= specialPlayerDamage;
      this.addLogMessage("player", "attack", specialPlayerDamage);
      this.attackPlayer();
    },
    healPlayer() {
      this.currentRound++;
      const playerHeal = getRandomValue(this.minPlayerHeal, this.maxPlayerHeal);
      this.playerHealth += playerHeal;
      if (this.playerHealth > 100) {
        this.playerHealth = 100;
      }
      this.addLogMessage("player", "heal", playerHeal);
      this.attackPlayer();
    },
    surrender() {
      this.winner = "monster";
    },
    addLogMessage(who, what, value) {
      this.logMessages.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    },
  },
});

app.mount("#game");
