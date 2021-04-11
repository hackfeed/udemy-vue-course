export default {
  contactCoach(context, data) {
    const newRequest = {
      id: new Date().toISOString(),
      coachId: data.coachId,
      userEmail: data.email,
      message: data.message,
    };

    context.commit("addRequest", newRequest);
  },
};
