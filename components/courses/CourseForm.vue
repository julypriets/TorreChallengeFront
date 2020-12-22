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
        <button class="btn-standard">SAVE</button>
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
      startDate: new Date(),
      current: false,
      endDate: new Date(),
      issuedBy: "",
      skillString: "",
      //   skills: [],
      sectorString: "",
      //   sectors: [],
      totalHours: 0,
      certificateID: "",
      certificateExpirationDate: new Date(),
      certificateURL: "",
      certificateImage: {}
    };
  },
  computed: {
    skills() {
      return this.skillString.split(",");
    },
    sectors() {
      return this.sectorString.split(",");
    }
  }
};
</script>
<style lang=""></style>
