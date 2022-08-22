public with sharing class studentDetail {
    @AuraEnabled(cacheable=true)
    public static List<Lead> getAllLeads(string input){
        input = input + '%';
        try {
            return [Select FirstName,LastName,Email,Company From Lead Where FirstName Like: input];
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
