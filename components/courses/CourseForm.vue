<template>
  <div>
    <Modal @toggle="$emit('toggle')">
      <div slot="header">
        <input
          type="text"
          class="form__title"
          v-model="name"
          placeholder="Type course name"
        />
      </div>
      <div slot="body">
        <div class="form">
          <div class="form__wrap">
            <div>
              <v-date-picker v-model="startDate" is-dark color="green">
                <template v-slot="{ inputValue, togglePopover }">
                  <div
                    class="form__date"
                    @click="togglePopover({ placement: 'auto-start' })"
                  >
                    <button class="form__date-button">
                      <span class="material-icons form__date-icon">
                        calendar_today
                      </span>
                    </button>
                    <input
                      :value="inputValue"
                      placeholder="* Start date"
                      class="form__date-input--first"
                      readonly
                    />
                  </div>
                </template>
              </v-date-picker>
              <div class="form__checkbox">
                <input name="current" type="checkbox" v-model="current" />
                <label for="current" class="form__checkbox-label"
                  >Current</label
                >
              </div>
            </div>
            <div>
              <v-date-picker
                v-model="endDate"
                is-dark
                color="green"
                v-if="!current"
              >
                <template v-slot="{ inputValue, togglePopover }">
                  <div
                    class="form__date"
                    @click="togglePopover({ placement: 'auto-start' })"
                  >
                    <button class="form__date-button">
                      <span class="material-icons form__date-icon">
                        calendar_today
                      </span>
                    </button>
                    <input
                      :value="inputValue"
                      placeholder="* End date"
                      class="form__date-input"
                      readonly
                    />
                  </div>
                </template>
              </v-date-picker>
              <div
                class="form__warning"
                v-if="startDate > endDate && endDate !== '' && !current"
              >
                <div class="form__warning-icon">!</div>
                <div class="form__warning-text">
                  End date cannot be earlier than Start date
                </div>
              </div>
            </div>
          </div>

          <input
            type="text"
            class="form__input"
            placeholder="* Organization / Platform"
            v-model="issuedBy"
          />

          <input
            type="text"
            class="form__input"
            v-model="skillString"
            placeholder="* Skills separated by comma"
          />

          <input
            type="text"
            class="form__input"
            v-model="sectorString"
            placeholder="* Sectors separated by comma"
          />

          <div class="form__wrap">
            <input
              type="number"
              class="form__input"
              placeholder="* Total hours"
              min="0"
              v-model.number="totalHours"
            />

            <input
              v-if="!current"
              type="text"
              class="form__input"
              v-model="certificateID"
              placeholder="Certificate ID"
            />
          </div>

          <div class="form__wrap" v-if="!current">
            <v-date-picker
              v-model="certificateExpirationDate"
              class="u-margin-top-sm"
              is-dark
              color="green"
            >
              <template v-slot="{ inputValue, togglePopover }">
                <div
                  class="form__date"
                  @click="togglePopover({ placement: 'auto-start' })"
                >
                  <button class="form__date-button">
                    <span class="material-icons form__date-icon">
                      calendar_today
                    </span>
                  </button>
                  <input
                    :value="inputValue"
                    placeholder="Certificate expiration date"
                    class="form__date-input--first"
                    readonly
                  />
                </div>
              </template>
            </v-date-picker>

            <input
              type="text"
              class="form__input"
              v-model="certificateURL"
              placeholder="Certificate URL"
            />
          </div>
        </div>
      </div>

      <div slot="footer">
        <button
          :class="activateSave ? 'btn-standard' : 'btn-standard--disabled'"
          :disabled="!activateSave"
          @click="save"
        >
          SAVE
        </button>
      </div>
    </Modal>
  </div>
</template>
<script>
import Modal from "@/components/utils/Modal";

export default {
  component: {
    Modal
  },
  data() {
    return {
      name: "",
      startDate: "",
      current: false,
      endDate: "",
      issuedBy: "",
      skillString: "",
      //   skills: [],
      sectorString: "",
      //   sectors: [],
      totalHours: 0,
      certificateID: "",
      certificateExpirationDate: "",
      certificateURL: "",
      certificateImage: {}
    };
  },
  methods: {
    async save() {
      console.log("SAVE");
      try {
        const body = this.current
          ? {
              name: this.name,
              startDate: this.startDate,
              current: this.current,
              issuedBy: this.issuedBy,
              skills: this.skills,
              sectors: this.sectors,
              totalHours: this.totalHours
            }
          : {
              name: this.name,
              startDate: this.startDate,
              current: this.current,
              endDate: this.endDate,
              issuedBy: this.issuedBy,
              skills: this.skills,
              sectors: this.sectors,
              totalHours: this.totalHours,
              certificateID: this.certificateID,
              certificateExpirationDate: this.certificateExpirationDate,
              certificateURL: this.certificateURL
            };
        const data = await this.$axios.$post("courses/createCourse", body);
        console.log("This is the data! ", data);
        //  this.$store.dispatch('courses/addCourse', data)
      } catch (err) {
        console.error(err);
      }
    }
  },
  computed: {
    skills() {
      return this.skillString.split(",");
    },
    sectors() {
      return this.sectorString.split(",").map(string => string.trim());
    },
    activateSave() {
      if (this.current) {
        if (
          this.name !== "" &&
          this.issuedBy !== "" &&
          this.skills.length > 0 &&
          this.sectors.length > 0 &&
          this.totalHours > 0
        ) {
          return true;
        } else {
          return false;
        }
      } else {
        if (
          this.name !== "" &&
          this.issuedBy !== "" &&
          this.skills.length > 0 &&
          this.sectors.length > 0 &&
          this.totalHours > 0 &&
          this.endDate >= this.startDate
        ) {
          return true;
        } else {
          return false;
        }
      }
    }
  }
};
</script>
<style lang=""></style>
